const components = import.meta.glob('./**/*.vue') as Record<
  string,
  () => Promise<{ default: unknown }>
>

const exportable: Record<string, unknown> = {}

function getName(key: string): string {
  return key.substring(key.lastIndexOf('/') + 1).split('.vue')[0]
}

Object.entries(components).forEach(async ([key, value]) => {
  const component = (await value()).default as { name?: string }
  const componentName = component.name || getName(key)
  exportable[componentName] = (await value()).default
})

export default exportable
