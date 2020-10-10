export default {
	data() {
		return {
			title: "Fiat",
			names: ['Vlad', 'Elena', 'Igor', 'Alex'],
			searchName: ''
		}
	},
	computed: {
		filteredNames() {
			return this.names.filter(item => {
				return item.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1
			})
		}
	}
}