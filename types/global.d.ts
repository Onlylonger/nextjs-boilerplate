declare module '*.css' {
  const tmp: any
  export default tmp
}

declare module '*.svg' {
  const tmp: React.StatelessComponent<React.SVGAttributes<SVGElement>>
  export default tmp
}
