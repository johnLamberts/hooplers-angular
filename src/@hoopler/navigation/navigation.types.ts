import { IsActiveMatchOptions } from "@angular/router";

export interface HooplerNavigationItem {
  id?: string;
  title?: string;
  subTitle?: string;
  type: 'aside' | 'basic' | 'collapsable' | 'divider' |'group' | 'spacer';
  hidden?: (item: HooplerNavigationItem) => boolean;
  active?: boolean;
  disabled?: boolean;
  tooltip?: string;
  link?: string;
  externalLink?: boolean;
  target?: '_blank' | '_self' | '_parent' | '_top' | string;
  exactMatch?: boolean;
  isActivateMatchOptions?: IsActiveMatchOptions;
  function?: (item: HooplerNavigationItem) => void;
  classes?: {
    title?: string; subTitle?: string; icon?: string; wrapper?: string
  };
  icon?: string;
  badge?: {
    title?: string;
    classes?: string;
  };
  children?: HooplerNavigationItem[];
  meta?: any;
}

export type HooplerVerticalNavigationAppearance  =
| 'default'
| 'compact'
| 'dense'
| 'thin';

export type HooplerVerticalNavigationMode =
| 'over'
| 'side';


export type HooplerVerticalNavigationPosition =
| 'left'
| 'right';
