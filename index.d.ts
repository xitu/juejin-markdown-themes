interface ThemePayload {
  style: string;
  highlight?: string;
}

declare const themes: Record<string, ThemePayload>;

export = themes;
