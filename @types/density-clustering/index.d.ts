/// <reference types="node" />

declare module 'density-clustering' {
  export type result = number[][]

  export class DBSCAN {
    new(): any
    run: (dataset: number[][], radius: any, amount: any) => result
  }
}
