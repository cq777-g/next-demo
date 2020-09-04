### 一、useState 

useState 是react自带的一个hook函数，作用是声明状态变量

* 声明

useState的参数是状态的初始值，他返回一个数组，数组的0位是当前的状态值，1位是可以改变状态值的方法函数。

```javascript
const [ count, setCount ] = useState(0);
```

* 读取

```javascript
<p>{count}</p>
```

* 使用（修改）

直接调用setCount函数，参数是修改过的新的状态值。

```javascript
<button onClick={()=>{setCount(count+1)}}>click me</button>
```

* 当声明多个状态变量的时候，React根据usState出现的顺序来确定他找到对应的state，必须根据相同的顺序进行渲染。useState不能在if...else...这样的条件语句中调用。

  ```javascript
   const [ age , setAge ] = useState(23)
   const [ sex , setSex ] = useState('女')
   const [ work , setWork ] = useState('前端程序员')
  ```
