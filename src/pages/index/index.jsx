import { Component } from "react";
import {
  View,
  Text,
  MovableArea,
  MovableView,
  Picker,
} from "@tarojs/components";
import "./index.scss";

export default class Index extends Component {
  constructor() {
    const date = "2021-05-18";
    super();
    this.state = {
      value1: date,
      value2: date,
      value3: date,
    };
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onChange(i) {
    return (e) => {
      console.log(e);
      this.setState({
        [`value${i}`]: e.detail.value,
      });
    };
  }
  render() {
    const { value1, value2, value3 } = this.state;
    return (
      <View className="index">
        <View className="card">
          这是没有嵌套的picker:
          <Picker mode="date" onChange={this.onChange(1)}>
            {value1}
          </Picker>
        </View>
        <View className="card">
          这是movable嵌套picker，movable-view
          <Text style="color:red">不绑定</Text>change的情况:
          <MovableArea>
            <MovableView>
              <Picker mode="date" onChange={this.onChange(2)}>
                {value2}
              </Picker>
            </MovableView>
          </MovableArea>
        </View>
        <View className="card">
          这是movable嵌套picker，movable-view<Text style="color:red">绑定</Text>
          change的情况:
          <MovableArea>
            <MovableView onChange={() => {}}>
              <Picker mode="date" onChange={this.onChange(3)}>
                {value3}
              </Picker>
            </MovableView>
          </MovableArea>
        </View>
      </View>
    );
  }
}
