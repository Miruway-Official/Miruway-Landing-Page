# ==========================================
# Miru Way Landing Page - Production Dockerfile
# Next.js 15 + Bun Runtime
# ==========================================

# Use Bun's official image
FROM oven/bun:1 AS base
WORKDIR /app

# ==========================================
# Stage 1: Dependencies
# ==========================================
FROM base AS deps
RUN apk add --no-cache libc6-compat
COPY package.json bun.lockb* ./
RUN bun install --no-save --frozen-lockfile

# ==========================================
# Stage 2: Builder
# ==========================================
FROM base AS builder
WORKDIR /app

# Install dependencies for native modules
RUN apk add --no-cache libc6-compat

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set environment variables for build
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Build the application
RUN bun run build

# ==========================================
# Stage 3: Runner (Production)
# ==========================================
FROM base AS runner
WORKDIR /app

# Set environment variables
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=6095
ENV HOSTNAME="0.0.0.0"

# Install runtime dependencies
RUN apk add --no-cache libc6-compat wget

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy necessary files from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Set correct permissions
RUN chown -R nextjs:nodejs /app

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 6095

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:6095/api/health || exit 1

# Start the application
CMD ["bun", "server.js"]