// default chart option
import { formatAbbreviation } from './utilities/numberFormat';

export default {
  series: [
    {
      type: 'gauge',
      splitNumber: 7,
      radius: '100%',
      axisLine: {
        lineStyle: {
          color: [[0.333, 'red'], [0.666, 'yellow'], [1, 'green']],
          width: 10,
        },
      },
      axisTick: {
        length: 15,
        lineStyle: {
          color: 'auto',
        },
      },
      splitLine: {
        length: 20,
        lineStyle: {
          color: 'auto',
        },
      },
      axisLabel: {
        borderRadius: 2,
        color: 'auto',
        padding: 3,
        textShadowOffsetX: 1,
        textShadowOffsetY: 1,
        textShadowColor: '#000',
        formatter: value => formatAbbreviation(value),
      },
      pointer: {
        width: 5,
      },
      detail: {
        offsetCenter: [0, '90%'],
        borderRadius: 3,
        fontSize: 0,
        backgroundColor: '#444',
        borderColor: '#aaa',
        shadowColor: '#333',
        shadowOffsetX: 0,
        shadowOffsetY: 3,
        borderWidth: 2,
        textShadowColor: '#fff',
        textShadowOffsetX: 0,
        textShadowOffsetY: 0,
        fontFamily: 'Source Sans Pro',
        width: '100%',
        color: '#eee',
        rich: {
          metricLabel: {
            align: 'left',
            color: '#eee',
            fontSize: 20,
          },
          metricValue: {
            align: 'right',
            color: '#eee',
            fontSize: 30,
            fontWeight: 'bolder',
          },
        },
      },
      data: [],
    },
  ],
};
