import * as PIXI from 'pixi.js';
import * as $ from 'jquery';

const PI2 = Math.PI * 2;

export function init(): void {
  const header = $('#Header');
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;

  const app = new PIXI.Application({
    width: header.width(),
    height: header.height(),
    view: canvas,
    antialias: true,
    backgroundColor: 0xffffff
  });

  app.stage.x = app.screen.width * 0.5;
  app.stage.y = app.screen.height * 0.5;

  const size = Math.min(
    60,
    Math.floor((header.width() * header.height()) / 45000)
  );
  const pool = new Pool(header, app.stage, size);

  app.ticker.add((delta: number) => {
    app.stage.x = app.screen.width * 0.5;
    app.stage.y = app.screen.height * 0.5;
    pool.update(delta);
  });

  window.onresize = () => {
    canvas.width = header.width();
    canvas.height = header.height();
    app.screen.width = canvas.width;
    app.screen.height = canvas.height;
  };
}

export class Particle extends PIXI.Graphics {
  protected hw: number;
  protected hh: number;
  protected size: number;
  protected offsetX: number;
  protected offsetY: number;
  protected offsetR: number;

  constructor(hw: number, hh: number) {
    super();

    this.hw = hw;
    this.hh = hh;

    this.size = Math.round(15 + Math.random() * 30);

    this.x = (Math.random() - 0.5) * this.hw;
    this.y = (Math.random() - 0.5) * this.hh;
    this.rotation = Math.random() * PI2;

    this.offsetX = (Math.random() - 0.5) * 2 < 0 ? -1 : 1;
    this.offsetX *= 0.125 + Math.random() * 0.2;

    this.offsetY = (Math.random() - 0.5) * 2 < 0 ? -1 : 1;
    this.offsetY *= 0.125 + Math.random() * 0.2;

    this.offsetR = (Math.random() - 0.5) * 2 * (0.02 + Math.random() * 0.01);
  }

  public update(delta: number): void {
    this.x += this.offsetX * delta;
    this.y += this.offsetY * delta;
    this.rotation += this.offsetR * delta;

    const gap = 50;
    const hw = this.hw * 0.5;

    if (hw + gap < this.x || this.x < -hw - gap) {
      this.offsetX = -this.offsetX;
    }

    const hh = this.hh * 0.5;

    if (hh + gap < this.y || this.y < -hh - gap) {
      this.offsetY = -this.offsetY;
    }
  }
}

export class Plus extends Particle {
  constructor(hw: number, hh: number) {
    super(hw, hh);

    const half = this.size * 0.5;
    this.lineStyle(Math.max(6, half * 0.2), 0x38066e, 1);
    this.moveTo(0, -half);
    this.lineTo(0, half);
    this.moveTo(-half, 0);
    this.lineTo(half, 0);
    this.endFill();
  }
}

export class Triangle extends Particle {
  constructor(hw: number, hh: number) {
    super(hw, hh);

    const half = this.size * 0.5;
    const THIRD = PI2 / 3;

    this.beginFill(0xe5f500);
    this.moveTo(Math.cos(THIRD * 0) * half, Math.sin(THIRD * 0) * half);
    this.lineTo(Math.cos(THIRD * 1) * half, Math.sin(THIRD * 1) * half);
    this.lineTo(Math.cos(THIRD * 2) * half, Math.sin(THIRD * 2) * half);
    this.lineTo(Math.cos(THIRD * 0) * half, Math.sin(THIRD * 0) * half);
    this.endFill();
  }
}

export class Rectangle extends Particle {
  constructor(hw: number, hh: number) {
    super(hw, hh);

    const half = this.size * 0.5;
    this.lineStyle(Math.max(6, half * 0.2), 0xf42f70, 1);
    this.drawRect(-half, -half, this.size, this.size);
    this.endFill();
  }
}

export class Pool {
  private particles: Array<Particle>;

  constructor(
    header: JQuery<HTMLElement>,
    stage: PIXI.Container,
    size: number
  ) {
    const hw = header.width();
    const hh = header.height();

    this.particles = [];

    for (let i = 0; i < size; i += 3) {
      const plus = new Plus(hw, hh);
      stage.addChild(plus);

      const triangle = new Triangle(hw, hh);
      stage.addChild(triangle);

      const rectangle = new Rectangle(hw, hh);
      stage.addChild(rectangle);

      this.particles.push(plus, triangle, rectangle);
    }
  }

  public update(delta: number): void {
    const length = this.particles.length;

    for (let i = 0; i < length; i++) {
      this.particles[i].update(delta);
    }
  }
}
