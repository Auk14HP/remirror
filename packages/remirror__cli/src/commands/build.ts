import { logger } from '../logger';
import { buildPackage } from '../utils/build-package';
import { listPackages } from '../utils/list-packages';

export async function build() {
  logger.debug(`current working directory: ${process.cwd()}`);
  const packages = await listPackages({ isPrivate: false });
  await Promise.all(packages.map(buildPackage));
}
