const base = ' | 株式会社Autumn 若手に響く驚きと新鮮さを作る映像製作会社'
const common = {
  meta: [
    // { name: 'fb:admins', content: 'admin id' },
    // { name: 'og:type', content: 'website' },
    // { name: 'og:url', content: 'url' },
    // { name: 'og:title', content: 'og page title' },
    // { name: 'og:site_name', content: 'og site name' },
    // { name: 'og:description', content: 'og description' },
    // { name: 'og:image', content: 'og image' },
  ],
  link: [
  ],
}

// NUXT に渡すためのフォーマッター
const generate = data => ({
  title: data.title + base,
  meta: [
    { hid: 'description', name: 'description', content: data.description },
    ...common.meta,
  ],
  link: [...common.link],
})

export default {
  '/': generate({
    title: 'Home',
    description: '',
  }),
  '/works': generate({
    title: 'Works',
    description: '',
  }),
  '/about': generate({
    title: 'About Us',
    description: '',
  }),
  '/company': generate({
    title: 'Company',
    description: '',
  }),
  '/contact': generate({
    title: 'Contact',
    description: '',
  }),
}
