import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementsCarousetItem extends Schema.Component {
  collectionName: 'components_elements_carouset_items';
  info: {
    displayName: 'CarousetItem';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    Tittle: Attribute.String;
    Description: Attribute.String;
    Body: Attribute.Text;
    Image: Attribute.Media;
    Lottie: Attribute.JSON;
  };
}

export interface SectionSection1 extends Schema.Component {
  collectionName: 'components_section_section1s';
  info: {
    displayName: 'Section1';
    icon: 'layout';
    description: '';
  };
  attributes: {
    Header: Attribute.String;
    Body: Attribute.Text;
    Image: Attribute.Media;
    Lottie: Attribute.JSON;
  };
}

export interface SectionSection2 extends Schema.Component {
  collectionName: 'components_section_section2s';
  info: {
    displayName: 'Section2';
    icon: 'layout';
    description: '';
  };
  attributes: {
    Header: Attribute.String;
    CarouselItem: Attribute.Component<'elements.carouset-item', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements.carouset-item': ElementsCarousetItem;
      'section.section1': SectionSection1;
      'section.section2': SectionSection2;
    }
  }
}
