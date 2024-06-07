import { ColorModeProvider, ColorModeProviderProps } from "../color-mode"
import { GlobalStyle, ThemeProvider, ThemeProviderProps } from "../system"
import type { Dict } from "@chakra-ui/utils"
import { CSSPolyfill, CSSReset } from "../css-reset"
import { EnvironmentProvider, EnvironmentProviderProps } from "../env"
import { PortalManager } from "../portal"

export interface ProviderProps extends Pick<ThemeProviderProps, "cssVarsRoot"> {
  /**
   * a theme. if omitted, uses the default theme provided by chakra
   */
  theme?: Dict
  /**
   * Common z-index to use for `Portal`
   *
   * @default undefined
   */
  portalZIndex?: number
  /**
   * If `true`, `CSSReset` component will be mounted to help
   * you reset browser styles
   *
   * @default true
   */
  resetCSS?: boolean
  /**
   * The selector to scope the css reset styles to.
   */
  resetScope?: string
  /**
   * manager to persist a users color mode preference in
   *
   * omit if you don't render server-side
   * for SSR: choose `cookieStorageManager`
   *
   * @default localStorageManager
   */
  colorModeManager?: ColorModeProviderProps["colorModeManager"]
  /**
   * Your application content
   */
  children?: React.ReactNode
  /**
   * The environment (`window` and `document`) to be used by
   * all components and hooks.
   *
   * By default, we smartly determine the ownerDocument and defaultView
   * based on where `ChakraProvider` is rendered.
   */
  environment?: EnvironmentProviderProps["environment"]
  /**
   * Disabled the use of automatic window and document detection.
   * This removed the injected `<span/>` element
   */
  disableEnvironment?: boolean
  /**
   * If `true`, Chakra will not mount the global styles defined in the theme.
   */
  disableGlobalStyle?: boolean
}

/**
 * The global provider that must be added to make all Chakra components
 * work correctly
 */
export const Provider: React.FC<ProviderProps> = (props) => {
  const {
    children,
    colorModeManager,
    portalZIndex,
    resetScope,
    resetCSS = true,
    theme = {},
    environment,
    cssVarsRoot,
    disableEnvironment,
    disableGlobalStyle,
  } = props

  const _children = (
    <EnvironmentProvider
      environment={environment}
      disabled={disableEnvironment}
    >
      {children}
    </EnvironmentProvider>
  )

  return (
    <ThemeProvider theme={theme as Dict} cssVarsRoot={cssVarsRoot}>
      <ColorModeProvider
        colorModeManager={colorModeManager}
        options={theme.config}
      >
        {resetCSS ? <CSSReset scope={resetScope} /> : <CSSPolyfill />}
        {!disableGlobalStyle && <GlobalStyle />}
        {portalZIndex ? (
          <PortalManager zIndex={portalZIndex}>{_children}</PortalManager>
        ) : (
          _children
        )}
      </ColorModeProvider>
    </ThemeProvider>
  )
}
