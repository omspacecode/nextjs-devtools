"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";

import ApiSwitcher from "./components/ApiSwitcher/ApiSwitcher";

import ProductCard from "./components/ProductCard/ProductCard";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(ApiSwitcher, {
  name: 'API Switcher',
  inputs: [
    {
      name: 'apiChoice',
      type: 'string',
      enum: [
        { label: 'Random User API', value: 'https://randomuser.me/api/' },
        { label: 'Zip API', value: 'https://api.zippopotam.us/us/33162' },
      ],
      defaultValue: 'https://randomuser.me/api/'
    }
  ],
});

Builder.registerComponent(ProductCard, {
  name: 'Product Card',
  inputs: [
    { name: 'productName', type: 'text', defaultValue: 'Sample Product' },
    { name: 'price', type: 'number', defaultValue: '9.99' },
    { name: 'imageUrl', type: 'string', defaultValue: 'path_to_default_image.jpg' }
  ],
  defaults: {

    // bindings: {
    //   'component.options.productName': 'state.products.data.productName',
    //   'component.options.price': 'state.products.data.price',
    //   'component.options.imageUrl': 'state.products.data.imageUrl'
    // }
  }
});

//state.resultsItem.data.price

// bindings: {
//   'component.options.productName': 'state.products.data.productName',
//   'component.options.price': 'state.products.data.price',
//   'component.options.imageUrl': 'state.products.data.imageUrl'
// }


// bindings: {
//   'component.options.productName': 'state.resultsItem.data.productName',
//   'component.options.price': 'state.resultsItem.data.price',
//   'component.options.imageUrl': 'state.resultsItem.data.imageUrl'
// }


