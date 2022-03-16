const {tools, config, defaultemb} = citnut
const {getParam} = tools

module.exports = {
	command: ["mute"],//từ khoá của plugin
	author: "Citnut",//tên tác giả
	description: "không cho người này dùng bot",//mô tả
	guide: "<tag>",//tóm tắt hướng dẫn sử dụng
	allowListening: false,//luôn lắng nghe (noprefix)
	permission: "adminsv",
	async listen (message,db) {
        if (message.type != "REPLY") return
        let filter = (abc) => true
        message.awaitMessageComponent({filter, time:30000})
	},
	async call (data,db) {
		let {id} = data.author
		let muteId = getParam(data.content)
		let {get,write} = db				
		const checkId = () => {
			if (!get.user[muteId]) {
				if (!get.user[muteId.slice(3,-1)]) return false
				return muteId.slice(3,-1)
			}else return muteId
		}
		const mute = checkId()
		if (data.guild) {
			if (id == data.guild.ownerId || config.admin.includes(id)) {
				if (!mute) return data.channel.send("sai id")
				if (get.user[mute].mutesv) return data.channel.send({embeds:[defaultemb(`người dùng ${get.user[mute].tag} hiện không được sử dụng bot tại máy chủ này`)]})
				get.user[mute].mutesv = true
				write(get)
				return data.channel.send({embeds: [defaultemb(`người dùng: ${get.user[mute].tag}\nđã bị mute và không thể sử dụng bot tại máy chủ này`).setThumbnail((data.author).displayAvatarURL({size: 1024, dynamic: true}))]})
			}else return data.channel.send("bạn không đủ quyền sử dụng lệnh này!")
		}else {
			if (!config.admin.includes(id)) return data.channel.send("bạn không đủ quyền sử dụng lệnh này!")
			if (!mute) return data.channel.send("sai id")
			if (get.user[mute].mute) return data.channel.send({embeds:[defaultemb(`người dùng ${get.user[mute].tag} hiện không được sử dụng bot này`)]})
			get.user[mute].mute = true
			write(get)
			return data.channel.send({embeds: [defaultemb(`người dùng: ${get.user[mute].tag}\nđã bị mute và không thể sử dụng bot`)]})
		}
	}
}