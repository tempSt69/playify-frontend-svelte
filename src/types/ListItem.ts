import type Song from "./Song";

export type ListItemType = Song & {
  active: boolean;
};
