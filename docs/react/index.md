# React



## 1、对 React 的理解

React 的核心特性是：数据驱动（MVVM）、组件化、单向数据流、虚拟DOM、Hooks、React Fiber

**虚拟DOM**：React引入了虚拟DOM的概念，即在内存中维护一个与实际DOM相对应的数据结构。每当组件的状态变化时，React首先更新虚拟DOM，然后通过高效的diff算法找出最小化的DOM更新操作，再将这些变化反映到实际DOM上，从而极大提升了渲染性能。

**组件化**：React强调组件化开发，鼓励将UI拆分成可复用的独立单元。组件具有明确的 **输入（Props）**和 **内部状态（State）**，使得代码易于组织和测试。

**单向数据流**：React推崇单向数据流的设计理念，数据从父组件流向子组件，通过props传递，而子组件通过回调函数通知父组件状态变化，这种设计有助于理解和调试应用状态。

**函数组件与Hooks**：随着React 16.8版本引入的Hooks，函数组件获得了状态管理和生命周期功能，使得无需类就能写出完整功能的组件，进一步简化了代码结构，提高了可读性和可复用性。

**React Fiber**：React 16 引入的调度算法改进，**异步渲染**，将渲染过程分解为多个小步骤，这样在执行过程中可以插入高优先级任务，如用户输入或动画。



### JSX

**基本语法**

文本插值、绑定属性、绑定事件，都使用大括号 `{ }`

```html
<Swiper autoplay={false} onChange={onChange}>
  {text}
</Swiper>
```

**列表渲染**

使用 `list.map` 进行列表渲染

```html
<div>
  {
    list.map((item, index) => (
      <div>{item}</div>
    ))
  }
</div>
```

**className**

添加多个 class

```html
import style from './content.module.scss';

// 使用字符串模版
<div className={`${style.item} ${style.active}`}>A</div>

// 使用数组 join
<div className={[style.item, style.active].join(' ')}>A</div>
```

**style**

设置样式

```html
<div style={{ paddingTop: safeArea?.top + 'px'}}>A</div>
```

**注释**

`{ /** JSX 里的注释 */ }`

```js
function App() {
  return (
    <Form form={form} onFinish={onSubmit} {...layout}>
      { /** blur 时触发校验，validateTrigger='onBlur' */ }
      <Form.Item name="name" label="活动名称" rules={rules.name}>
        <Input />
      </Form.Item>
    </Form>
  )
}
```



## 2、React 生命周期

### 组件的生命周期概述

React 组件的生命周期可以分为三个主要阶段：

1. **挂载（Mounting）**：组件被创建并插入到 DOM 中。
2. **更新（Updating）**：组件的状态或属性发生变化，导致组件重新渲染。
3. **卸载（Unmounting）**：组件从 DOM 中删除。



### 函数组件中的生命周期

#### useEffect

`useEffect` 是处理副作用的主要方法，可以看作是组合了 `componentDidMount`、`componentDidUpdate` 和 `componentWillUnmount` 的功能。

空依赖数据组

```js
useEffect(() => {
  console.log('Component did mount');

  return () => {
    console.log('Component will unmount');
  };
}, []); // 空依赖数组，表示只在组件挂载和卸载时调用
```

有依赖项

```js
useEffect(() => {
  console.log('Count has changed:', count);

  return () => {
    console.log('Cleaning up...');
  };
}, [count]); // 依赖于 count，当 count 变化时调用
```



## 3、React Hooks

### useState

`useState` 返回一个状态变量和一个更新该状态的函数

#### 对象状态的更新

使用 `useState` 管理对象状态时，需要注意不要直接修改对象，而是通过创建新对象来更新状态。直接修改对象属性不会触发组件重新渲染

```js
const [form, setForm] = useState({ name: 'jack' });

const changeForm = () => {
  // 错误写法：直接修改对象
  // form.name = 'john';

  // 正确写法：创建一个新对象
  setForm({
    ...form,
    name: 'john'
  });
};
```

#### 函数式更新

当新状态依赖于之前的状态时，使用函数式更新可以避免潜在的竞态条件。函数式更新接收一个函数，该函数的参数是之前的状态，返回新的状态值

```js
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // 函数式更新
    setCount(prev => {
      return prev + 1
    });
  };

  return (
    <div>
      <button onClick={handleClick}>{count}</button>
    </div>
  );
}

export default App;
```



### useRef

虽然 `useRef` 和 `useState` 都可以存储值，但它们有不同的用途：

1. 管理状态： `useState` 旨在管理组件内的状态。当状态更新时，它会触发重新渲染，确保 UI 反映最新值。
2. 访问和操作 DOM： `useRef` 主要用于与 DOM 交互，例如访问输入值或关注元素。它允许我们存储对 DOM 节点的引用并检索它们的属性，而无需触发重新渲染。
3. 跨渲染保留值： `useRef` 在组件渲染之间维护相同的值，而 `useState` 在每次渲染期间初始化状态。
4. 重新渲染行为：更新 `useState` 返回的值会导致组件重新渲染，同时更新使用 `useRef` 的 `current` 属性 不会触发重新渲染。



## 4、React 性能优化的手段

### 常用方法

**组件优化**

- 在函数组件中，使用`useMemo`缓存计算结果，`useCallback`缓存回调函数，防止因依赖项不变而引起的无效渲染。
- 可以将子组件抽离出来，封装成简单的**纯函数组件**，并使用 `React.memo` 包裹。

::: info

一个函数的返回结果只依赖于它的参数、无任何副作用、相同的输入总能得到相同的输出，该函数就可以称为一个纯函数。

纯函数组件的优势在于我们可以通过**判断函数入参是否改变**，来决定是否**跳过渲染**。可以安全地缓存它们。

:::

> 注意，当父组件向子组件传递了 <span style="color: red;">对象 / 数组 / 函数</span> 等引用类型的数据时，<span style="color: red;">即便给子组件添加了 memo ，依然会重新渲染</span>

- 避免在 render 方法中定义函数

在 `render` 方法中定义函数会导致每次渲染时都创建新的函数实例，影响性能。将函数定义在组件外，如自定义 Hook，或使用 `useCallback` 缓存函数。

**状态管理与变更**

- 减少不必要的setState调用：合并多次对同一状态的修改，例如使用`useState` 时，可以利用 **函数式的 setState** 来一次性更新多个状态值。
- 选择性地更新state：只在props或state真正发生变化时才进行更新，避免频繁或大面积的state变更引发大量子组件重新渲染。

**DOM结构优化**

- 利用key属性：为列表元素提供稳定的唯一key，帮助React识别并最小化DOM变动。
- 少用 dom 层级 多使用箭头标签替代

**事件处理优化**

- 避免内联函数绑定：在事件处理函数中，避免每次渲染时创建新的函数引用，而是使用箭头函数或者`useCallback`来缓存函数引用。

**懒加载**

- 动态导入：使用React.lazy和Suspense来按需加载组件，减轻初始加载负担，提高首屏加载速度。

**工具辅助**

- Profiler工具：利用React DevTools的Profiler面板分析组件渲染性能瓶颈。



### 详细说明

**一、控制组件重渲染的波及范围**，只让该更新的更新，不该更新的不更新，灵活运用`React.memo` 跳过重渲染。

- 在 React 的默认行为中，一个组件触发更新，那么它会递归遍历其所有子组件，生成新的虚拟 DOM 树，最后再进行 Diff，决定哪些需要提交到真实的 DOM 中。
- 尽管最后更新的实际 DOM 节点并不多，但组件调用和 Diff 的成本也是昂贵的。当变更的组件层级较高，或者组件内部逻辑复杂，将会导致一些性能问题。

**二、避免组件入参的不必要变更**，在使用 `memo` 对组件进行缓存后，默认情况下，React 将使用 `Object.is` 来浅比较每个 prop。这就意味着当存在数组、对象、函数等形式的入参时，需要格外注意，否则我们的 Memo 可能永远不会生效。

- **对于需要生成** **数组** **、对象等场景**，可使用 `useMemo` 来跳过昂贵计算的重复生成，在不必要更新时保持对象的引用不变。尽量避免在 JSX 内直接写字面量来创建新的对象、数组。
- **对于需向子组件传递** **回调函数** **等场景**，可使用 `useCallback` 来缓存所需传入的回调函数，使得此函数在父组件重渲染时不会被重新生成，保持函数引用的统一。尽量规避在 JSX 内传参时写内连函数，这会在每次渲染时创建一个新函数。
- **对于使用了** **Context 上下文** **的场景**，向 Provider 传递 Value 时也需要格外注意。如果 Value 是一个对象类型，可以将其用 useMemo 包裹，否则所有依赖此上下文的子组件都将随着 Provider 的父组件的重渲染而渲染，哪怕此子组件已经被 memo 包裹。

**三、避免频繁、重复、无意义的 setState，** 调用 setState 即意味着即将触发重渲染，递归调用所有子组件的运行和 Diff 成本可能是昂贵的。

- **和页面展示/更新无关的数据，不维护在 State 中。** 如果这个变量都不会在界面上显示，或者说，不会因为这个变量的改变而触发更新，可以考虑维护不在 State 中维护，例如，像用作计数器之类的变量，可以使用 useRef 存储。
- **合并 state，减少频繁 setState 的场景。** 例如，在异步获取多个接口数据的场景中，相比各个接口请求完成后设置独立的 state，可以等待他们都请求完成之后，合并设置到一个 state 中。这样可以有效减少重渲染次数，毕竟中间设置的 state 引发的重渲染是没有意义的。



## 5、JSX 转换成真实 DOM 过程

**TypeScript 编译阶段**：

- .tsx 文件包含了 TypeScript 类型注解和 JSX 语法，首先通过 TypeScript 编译器（如tsc或者配合Babel的@babel/preset-typescript插件）进行编译。
- TypeScript 编译器负责检查类型注解的正确性，并且把包含类型信息的 TypeScript+JSX 代码转换为普通的 JavaScript 代码，同时保持 JSX 结构不变2

**JSX 编译阶段**：

- 开发者使用JSX编写React组件。
- JSX并非浏览器原生支持的语法，所以需要通过像Babel这样的编译器将其转换为标准的JavaScript代码。
- Babel将JSX转换成`React.createElement(component, props, ...children)`的调用形式，其中component是组件名称或原生DOM元素标签名，props是组件属性对象，children是子元素数组。

**创建虚拟DOM（VDOM）**：

- `React.createElement()`调用会产生一个虚拟DOM节点对象，它是一个轻量级的JavaScript对象，模拟了DOM节点的结构和属性。
- 整个组件树会转换成由这些虚拟DOM节点构成的虚拟DOM树。

**渲染虚拟DOM**：

- 当调用`ReactDOM.render()`方法时，React接收虚拟DOM树作为参数。
- React会将这个虚拟DOM树与实际DOM进行比较（首次渲染时不存在比较，直接创建）。

**DIFF算法与更新DOM**：

- 在组件状态或props更改导致重新渲染时，React会生成一个新的虚拟DOM树，并与旧的虚拟DOM树进行高效差异比较（称为Reconciliation或Diffing过程）。
- Diff算法找出最小化的DOM操作集合（增删改查节点）。
- React随后将这些操作应用到实际的DOM上，仅更新需要改变的部分，而不是完全替换整个DOM树。

**真实DOM更新**：

- 最终，React通过ReactDOM模块与浏览器底层交互，执行必要的DOM操作，将虚拟DOM树的改动反映到浏览器的真实DOM中



## 6、对 Fiber 架构的理解

Fiber 即是React新的调度算法

**Fiber架构出现之前 react 存在的问题**

1. **主线程阻塞**：在React 15及更早版本中，当组件树发生更新时，React会通过递归算法一次性完成整个组件树的渲染过程，这个过程如果涉及大量组件，会导致主线程长时间阻塞，无法处理其他的UI交互，从而造成卡顿和延迟，降低用户体验。
2. **无法中断与恢复渲染**：原有的渲染过程不具备中断和恢复的能力，一旦开始渲染，就必须等到整个过程结束，即使在中间有更高优先级的任务也需要等待。
3. **无法实现增量渲染**：以往的React无法有效区分渲染任务的重要性和紧急程度，所有更新任务都被视为同等重要的，无法做到逐步、增量地渲染UI。
4. **资源优化不足**：旧版React无法根据应用的具体需求动态分配资源，无法高效利用有限的CPU周期来优化渲染性能。



### Fiber 数据结构

#### FiberNode

**jsx 形成 dom 的以下几个步骤，react 在虚拟 dom 之前做了一层数据结构设计将**ReactElement 转换为 fiberNode

- 写JSX来描述React组件的结构和内容。
- **JSX被Babel转译成React.createElement(__jsx或__jsxs)的调用，生成ReactElement。**
- 在React的协调过程中，ReactElement被转换成FiberNode。
- FiberNode是React用来进行高效渲染和更新的数据结构，它支持并发渲染和优先级调度。
- 最终，FiberNode的信息被用来更新浏览器中的真实DOM，从而呈现用户界面。

![fiber](../assets/images/React/fiber.png)

**Fiber数据结构是一个链表，这样就为Fiber架构可中断渲染提供可能**

**tag****：**

- - **tag****用来标识Fiber节点的类型。**
  - **不同的****tag****值代表了不同类型的React元素，比如函数组件、类组件、DOM元素等。**
  - **React会根据****tag****的值来决定如何处理该Fiber节点。**

**key****：**

- - **key****是一个可选的字符串，用于在兄弟元素之间建立唯一的身份。**
  - **当列表重新排序或元素添加/删除时，****key****帮助React识别哪些元素发生了变化，从而高效地更新UI。**
  - **在Fiber节点中，****key****用于在协调过程中识别节点的身份。**

**child****：**

- - **child****指向Fiber节点的第一个子节点。**
  - **通过****child****属性，React可以遍历Fiber树，执行渲染和更新操作。**

**sibling****：**

- - **sibling****指向Fiber节点的下一个兄弟节点。**
  - **当React遍历完一个Fiber节点的所有子节点后，它会通过****sibling****属性移动到下一个兄弟节点，继续遍历。**

**return****：**

- - **return****指向Fiber节点的父节点。**
  - **通过****return****属性，React可以在Fiber树中向上回溯，这对于错误处理和优先级调度等功能非常重要。**



### Fiber 工作原理

**双缓冲技术：** React Fiber使用了类似于图形渲染中的双缓冲技术。这意味着在构建新的UI树时，React会同时在内存中维护两棵树：当前屏幕上显示的树（current tree）和正在构建的树（work-in-progress tree）。只有当新的树完全构建完成后，它才会被一次性地渲染到屏幕上，从而实现更加流畅的用户体验。

**任务调度：** React Fiber引入了任务调度的概念，允许将渲染工作拆分成多个较小的任务单元。这些任务单元可以被中断和恢复，从而实现并发渲染。React根据任务的优先级来决定它们的执行顺序，确保高优先级的任务（如用户交互）能够优先执行。



**那 Fiber 是怎么实现的**

主要是通过两个原生的 API 来实现的 `requestAnimationFrame` 和 `requestIdleCallback`

显示器每秒 60 帧我们看着才不会感觉到卡嘛，比如动画的时候，一帧的时间内布局和绘制结束，还有剩余时间，JS 就会拿到主线程使用权，如果 JS 某个任务执行过长，动画下一帧开始时 JS 还没有执行完，就会导致掉帧，出现卡顿。

所以就通过把 JS 任务分成更小的任务块，分到每一帧上的方式，一帧时间到先暂停 JS 执行，然后下一帧绘制任完成再把主线程交给 JS，在每一帧绘制之前调用 requestAnimationFrame；在每一帧空间阶段，就是一帧动画任务完成，下一帧还没到开始时间，这中间还有时间的话就调用 requetIdleCallback，执行它里面的任务



## 7、diff的原理

React中的diff算法是其核心优化策略之一，用于比较新旧两个虚拟DOM树之间的差异，并找出最小化的DOM操作集以更新真实DOM。以下是React中diff算法的大致步骤概述：



**树结构比较**:

- React并不会简单地递归遍历整颗新旧虚拟DOM树进行全量比较，而是采用分层比较的思想，仅比较同层级的节点。
  - **它首先会比较树的根节点，如果根节点不同，则直接替换整个根节点对应的真实DOM元素。**

**同层级节点比较**:

- **对于同层级的子节点，React会尝试找到旧树中与新树中每一个节点相匹配的节点，主要依据是它们的**`**key**`**属性。**

  - 如果找到了具有相同`key`的节点，则认为它们是同一个“实体”，只需更新属性或内容。

  - 如果没有找到相同`key`的节点，则视为新增或删除节点。

**属性比较与更新**:

- 对于找到匹配节点的情况，React会进一步比较它们的属性是否有变化，如果有变化则更新相应的真实DOM元素的属性。

**文本节点与组件节点处理**:

- **文本节点的比较相对简单，直接比较文本内容即可。**
- 组件节点则根据组件类型（类或函数组件）以及props的变化决定是否需要重新渲染。**

**子节点递归比较**:

- 当节点匹配成功后，继续对其子节点进行同样的分层级比较，直至所有子节点都已比较完毕。

**跳过跨层级操作**:

- React假设在一次更新中，一个节点及其子节点不会随意地在DOM树中跨层级移动。因此，它在寻找匹配节点时只会对兄弟节点进行比较，而不是在整个树中搜索，大大降低了算法复杂度。

**删除与插入操作**:

- 在比较过程中，React收集到的所有需要删除的旧节点和需要插入的新节点，会在比较结束后统一进行DOM操作，避免频繁地增删DOM元素。

**优化策略**:

- React还有一系列优化策略，例如先处理移动或更新的节点，尽量减少DOM元素的移动次数；对组件类型不同的节点直接进行替换，不尝试深入比较等。

通过以上步骤，**React的diff算法能够在O(n)的时间复杂度内完成虚拟DOM树的比较，从而实现在大量DOM更新时依然保持较高的性能。**



## 8、Redux 原理

**Redux 是 JavaScript 状态容器,提供可预测化的状态管理**。我的理解是，redux是为了解决react组件间通信和组件间状态共享而提出的一种解决方案，主要包括3个部分，（store + action + reducer）。

- **store：**用来存储当前react状态机（state）的对象。connect后，store的改变就会驱动react的生命周期循环，从而驱动页面状态的改变
- **state**: store对象包含的所有数据
- **action**: 用于接受state的改变命令，是改变state的唯一途径和入口。一般使用时在当前组件里面调用相关的action方法，通常把和后端的通信(ajax)函数放在这里
- **reducer**: action的处理器，用于修改store中state的值，返回一个新的state值
- **dispatch**: view发出action的唯一方法



**主要解决什么问题：**

**1、组件间通信**

由于connect后，各connect组件是共享store的，所以各组件可以通过store来进行数据通信，当然这里必须遵守redux的一些规范，比如遵守 view -> aciton -> reducer的改变state的路径

**2、通过对象驱动组件进入生命周期**

对于一个react组件来说，只能对自己的state改变驱动自己的生命周期，或者通过外部传入的props进行驱动。通过redux，可以通过store中改变的state，来驱动组件进行update

**3、方便进行数据管理和切片**

redux通过对store的管理和控制，可以很方便的实现页面状态的管理和切片。通过切片的操作，可以轻松的实现redo之类的操作





## 参考文档

[https://blog.csdn.net/qq_16546829/article/details/137056845](https://blog.csdn.net/qq_16546829/article/details/137056845)