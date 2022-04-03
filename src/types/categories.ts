const categoriesExample = {
  id: 'MLA418448',
  name: 'Teclados Físicos',
  picture: null,
  permalink: null,
  total_items_in_this_category: 18121,
  path_from_root: [
    {
      id: 'MLA1648',
      name: 'Computación'
    },
    {
      id: 'MLA454379',
      name: 'Periféricos de PC'
    },
    {
      id: 'MLA430630',
      name: 'Mouses y Teclados'
    },
    {
      id: 'MLA1713',
      name: 'Teclados'
    },
    {
      id: 'MLA418448',
      name: 'Teclados Físicos'
    }
  ],
  children_categories: [],
  attribute_types: 'variations',
  settings: {
    adult_content: false,
    buying_allowed: true,
    buying_modes: ['auction', 'buy_it_now'],
    catalog_domain: 'MLA-PC_KEYBOARDS',
    coverage_areas: 'not_allowed',
    currencies: ['ARS'],
    fragile: false,
    immediate_payment: 'required',
    item_conditions: ['not_specified', 'used', 'new'],
    items_reviews_allowed: false,
    listing_allowed: true,
    max_description_length: 50000,
    max_pictures_per_item: 12,
    max_pictures_per_item_var: 10,
    max_sub_title_length: 70,
    max_title_length: 60,
    max_variations_allowed: 500,
    maximum_price: null,
    maximum_price_currency: 'ARS',
    minimum_price: 99,
    minimum_price_currency: 'ARS',
    mirror_category: null,
    mirror_master_category: null,
    mirror_slave_categories: [],
    price: 'required',
    reservation_allowed: 'not_allowed',
    restrictions: [],
    rounded_address: false,
    seller_contact: 'not_allowed',
    shipping_options: ['custom', 'carrier'],
    shipping_profile: 'optional',
    show_contact_information: false,
    simple_shipping: 'optional',
    stock: 'required',
    sub_vertical: 'computers',
    subscribable: false,
    tags: [],
    vertical: 'consumer_electronics',
    vip_subdomain: 'articulo',
    buyer_protection_programs: ['delivered', 'undelivered'],
    status: 'enabled'
  },
  channels_settings: [
    {
      channel: 'mshops',
      settings: {
        minimum_price: 0
      }
    },
    {
      channel: 'proximity',
      settings: {
        status: 'disabled'
      }
    },
    {
      channel: 'mp-merchants',
      settings: {
        buying_modes: ['buy_it_now'],
        immediate_payment: 'required',
        minimum_price: 1,
        status: 'enabled'
      }
    }
  ],
  meta_categ_id: null,
  attributable: false,
  date_created: '2018-10-22T09:55:40.000Z'
}

const filterCategoryExample = {
  id: 'MLA1051',
  name: 'Celulares y Teléfonos'
}

export type filterCategory = typeof filterCategoryExample
export type categories = typeof categoriesExample
