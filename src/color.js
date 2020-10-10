export default {
	//Первый жизненный этап, оно прикрепляется к элементу внутри виртуального дома, но при этом директива не находится в реальном дом дереве.
	bind(el, bindings, vnode) {

		//Модификатор нужно передавать в квадратных скобках, так как при минификации кода, этот параметр может быть сокращен и будет ошибка.
		//А нам нужно полное название
		const fontModifier = bindings.modifiers['font']

		if (fontModifier) {
			el.style.fontSize = '80px'
		}

		const delayModifier = bindings.modifiers['delay']
		let delay = 0;


		if (delayModifier) {
			delay = 2000
		}
		setTimeout(() => {
			const arg = bindings.arg;
			el.style[arg] = bindings.value;
		}, delay)
	},
	//Директива уже находится в виртуальном дом дереве.
	inserted(el, bindings, vnode) {
		console.log('inserted');
	},
	//Вызывается, когда затрагивается родительский компонент, но не обновлялись дочерние компоненты.
	update(el, bindings, vnode, oldVnode) {
		console.log('update');
	},
	//Вызывается после метода update, если обновились дочерние элементы
	componentUpdated(el, bindings, vnode, oldVnode) {
		console.log('componentUpdated');
	},
	//Вызывается, когда директива заканчивает свое существование и убирается из дом дерево.
	unbind() {
		console.log('unbind');
	}
};