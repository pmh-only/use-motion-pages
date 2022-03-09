# use-motion-pages
simple &amp; easy page detector

## example
https://user-images.githubusercontent.com/39158228/157454761-24afefee-ce89-476d-8b87-fc7f13e95558.mp4

```jsx
const page = usePage()

const position = 'fixed'
const rotate = useTransform(page, [0.5, 1], ['0deg', '180deg'])
const backgroundColor = useTransform(page, [0, 1], ['#212121', '#fafafa'])

return (
  <motion.div style={{ backgroundColor }}>
    <motion.img
      style={{ rotate, position }}
      src={logo} />

    <PageOffset />
    <PageOffset />
  </motion.div>
)
```
