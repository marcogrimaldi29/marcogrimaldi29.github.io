import { execSync } from 'node:child_process';

/**
 * Last Git commit date (committer date) that touched the given path(s), resolved
 * at build time. With no paths, returns the latest commit overall. Returns
 * `undefined` when there is no matching commit or Git is unavailable (e.g. an
 * uncommitted file, a shallow clone, or building from a tarball).
 *
 * Note: accurate per-file dates in CI require full history — check out with
 * actions/checkout `fetch-depth: 0`.
 */
export function lastCommitDate(...paths: string[]): Date | undefined {
  const spec = paths.length
    ? ` -- ${paths.map((p) => `"${p.replace(/\\/g, '/')}"`).join(' ')}`
    : '';
  try {
    const out = execSync(`git log -1 --format=%cI${spec}`, {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    return out ? new Date(out) : undefined;
  } catch {
    return undefined;
  }
}
