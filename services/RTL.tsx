import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { RTLProps } from "../type/types";
// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const RTL = ({ children }: RTLProps): JSX.Element => (
  <CacheProvider value={cacheRtl}>{children}</CacheProvider>
);

export default RTL;
