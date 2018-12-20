export type SpecificSizingInterface = {
  minimumButtonSize: string
  minimumLineSize: string
  minimumSpacing: string
}

type SizingInterface = {
  mediumSpacing: string
  largeSpacing: string
}

type BorderRadiusInterface = {
  borderRadius: string
}

type ScreenSizes = {
  minimumScreenSize: string
  mobileScreenSize: string
  smallScreenSize: string
  mediumScreenSize: string
}

type ZIndexes = {
  zIndexMenubar: number
  zIndexLightbox: number
  zIndexLoadingCompanion: number
  zIndexSlideout: number
  zIndexContent: number
  zIndexConfirmation: number
  zIndexHelp: number
  zIndexVerticalMenu: number
  zIndexDropdown: number
  zIndexMenuItem: number
  zIndexBlocking: number
}

type Transitions = {
  transitionTime: string
  coreTransitionTime: string
}

type FontSizes = {
  minimumFontSize: string
  mediumFontSize: string
  largeFontSize: string
}

type Dividers = {
  dividerHeight: string
  minimumDividerSize: string
}

type Opacity = {
  minimumOpacity: number
}

export type ThemeColorInterface = {
  primaryColor: string
  positiveColor: string
  negativeColor: string
  warningColor: string
  favoriteColor: string
  backgroundNavigation: string
  backgroundAccentContent: string
  backgroundDropdown: string
  backgroundContent: string
  backgroundModal: string
  backgroundSlideout: string
}

type Current = {
  background: string
}

type ThemeName = {
  theme: string
}

type Helpers = {
  screenSize: number
  multiple: (multiplier: number, variable: string, unit?: string) => string
  screenBelow: (specifiedSize: string) => boolean
}

export type ThemeInterface = SizingInterface &
  SpecificSizingInterface &
  BorderRadiusInterface &
  ScreenSizes &
  ZIndexes &
  Transitions &
  FontSizes &
  Dividers &
  Opacity &
  ThemeColorInterface &
  ThemeName &
  Helpers &
  Current
