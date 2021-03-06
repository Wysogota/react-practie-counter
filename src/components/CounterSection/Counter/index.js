import React, { Component } from 'react';
import AutoClick from '../AutoClick';
import CounterСontrol from '../CounterСontrol';
import UpdateStep from '../UpdateStep';
import ShowStep from '../ShowStep';
import styles from './Counter.module.css'

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      step: 1,
      direction: true,
    }
  }

  setValue = (step = this.state.step) => {
    const { value, direction } = this.state;
    this.setState({
      value: direction ? value + Number(step) : value - Number(step)
    });
  }
  setStep = (newStep) => this.setState({ step: newStep });
  changeDirection = () => this.setState({ direction: !this.state.direction })

  render() {
    const { step, value, direction } = this.state;
    return (
      <article className={styles.counter}>
        <div className={styles.counterWrapper}>
          <p className={styles.value}>{value}</p>
          <CounterСontrol
            setValue={this.setValue}
            changeDirection={this.changeDirection}
            direction={direction}
          />
          <ShowStep step={step} />
          <UpdateStep setStep={this.setStep} />
          <AutoClick step={step} setValue={this.setValue} />
        </div>
      </article>
    );
  }
}
