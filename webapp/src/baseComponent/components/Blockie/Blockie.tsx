import * as React from 'react'
// @ts-ignore
import * as blockies from 'ethereum-blockies/blockies'
import './Blockie.css'

export type BlockieProps = {
  seed: string
  color?: string
  spotcolor?: string
  bgcolor?: string
  size?: number
  scale?: number
  className?: string
  children?: React.ReactNode
}

export type CanvasStateStore = {
  canvas?: HTMLCanvasElement
}

export class Blockie extends React.PureComponent<BlockieProps> {
  static defaultProps = {
    color: '#e449c2',
    bgcolor: '#3149de',
    spotcolor: '#e449c2',
    size: 6,
    scale: 6,
    className: ''
  }

  canvas = React.createRef<HTMLCanvasElement>()

  componentDidMount() {
    this.draw()
  }
  componentDidUpdate() {
    this.draw()
  }

  getOpts() {
    const { seed, color, spotcolor, bgcolor, size, scale } = this.props

    return {
      seed: seed ? seed.toLowerCase() : '',
      color,
      spotcolor,
      bgcolor,
      size,
      scale
    }
  }

  draw() {
    if (!this.canvas || !this.canvas.current) {
      return '🦄'
    }
    const { size, scale } = this.props
    const ctx = this.canvas.current.getContext('2d')
    // @ts-ignore
    ctx.clearRect(0, 0, size * scale, size * scale)
    blockies.render(this.getOpts(), this.canvas.current)
  }

  render() {
    const { size, scale, children, className } = this.props
    let classes = `dcl blockie ${className}`.trim()
    if (Number(scale) * + Number(size) <= 16) {
      classes += ' mini'
    } else if (Number(scale) * Number(size) <= 24) {
      classes += ' tiny'
    } else if (Number(scale )* Number(size) <= 36) {
      classes += ' small'
    }

    const canvas = <canvas className={classes} ref={this.canvas} />

    if (children) {
      return (
        <span className="dcl blockie-wrapper">
          {canvas}
          <span className="dcl blockie-children">{children}</span>
        </span>
      )
    }
    return canvas
  }
}
