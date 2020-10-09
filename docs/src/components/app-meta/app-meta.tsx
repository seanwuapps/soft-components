import { Component, h, Prop } from '@stencil/core';
import Helmet from '@stencil/helmet';

@Component({
  tag: 'app-meta',
  shadow: true,
})
export class AppMeta {
  @Prop() pageTitle?: string = 'Soft Components';

  @Prop() description?: string = 'Web components inspired by the neumorphism design';

  @Prop() image?: string = '/assets/img/logo.png';

  render() {
    const { pageTitle: title, description, image } = this;
    return (
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@softcomponents" />
        <meta name="twitter:creator" content="@seanwuapps" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />

        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />

        <meta property="og:image" content={image} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="Soft Components" />
        <meta property="og:locale" content="en_AU" />
      </Helmet>
    );
  }
}
