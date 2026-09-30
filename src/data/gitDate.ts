import { execFileSync } from 'node:child_process';

/**
 * Last Git commit date (committer date) that touched the given path(s), resolved
 * at build time. With no paths, returns the latest commit overall. Returns
 * `undefined` when there is no matching commit or Git is unavailable (e.g. an
 * uncommitted file, a shallow clone, or building from a tarball).
 *
 * Formatting-only commits (Conventional Commits `style:` / `style(scope):`) are
 * skipped, so a repo-wide reformat doesn't make every page look freshly updated.
 *
 * Note: accurate per-file dates in CI require full history — check out with
 * actions/checkout `fetch-depth: 0`.
 */
export function lastCommitDate(...paths: string[]): Date | undefined {
  const args = ['log', '-1', '--invert-grep', '--grep=^style[(:]', '--format=%cI'];
  if (paths.length) args.push('--', ...paths.map((p) => p.replace(/\\/g, '/')));
  try {
    const out = execFileSync('git', args, {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    return out ? new Date(out) : undefined;
  } catch {
    return undefined;
  }
}
