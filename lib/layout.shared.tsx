import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    // Cast to any to allow adding a custom logo key (layout library may not expose logo in types)
    nav: {
      title: 'Google Colab',
      // Use the SVG in /public for the header logo
      logo: '/google-colab-icon.svg',
    } as any,
  };
}
