import cx from 'clsx';

import ChevronDownIcon from '@/components/icons/chervon-down-icon';

import styles from './dropdown-icon.module.css';
import { DropdownIconProps } from './dropdown-icon.type';

function DropdownIcon({
  type = 'rotate',
  active = false,
  className,
}: DropdownIconProps) {
  if (type === 'rotate') {
    return (
      <span
        data-active={active}
        data-testid="dropdown-icon"
        className={cx(styles.rotate, className)}
      >
        <ChevronDownIcon data-testid="chevron-down-icon" />
      </span>
    );
  }

  return (
    <span
      aria-hidden="true"
      data-active={active}
      data-testid="dropdown-icon"
      className={cx(styles.close, className)}
    />
  );
}

export default DropdownIcon;
