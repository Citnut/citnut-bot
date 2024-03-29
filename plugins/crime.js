const {round,random} = citnut.tools
const {SlashCommandBuilder} = require("@discordjs/builders")
const command = ["crime"], description = "ăn cướp đóng tiền học thêm :>"

module.exports = {
	command,
	author: "Citnut",
	description,
	guide: "",
	allowListening: false,
    slashmode: true,
    slashconfig: new SlashCommandBuilder()
        .setName(command[0])
        .setDescription(description)
    ,
    async slashHandle (data, db) {
        return data.reply(await this.crimefunc(data, data.user.id, (data.user).displayAvatarURL({size: 1024, dynamic: true}), db))
    },
    async interaction (data, db) {
    },
	async listen (data,db) {
	},
	async crimefunc (data,id,avt,db) {
		const {crime,cooldown} = await citnut.tools.getapi("eco",data,false)
        const time = new Date
        const rate = [true,false]
        if (time.getTime() < db.eco.crime[id] + (cooldown.crime * 1000)) {
            let cd = (db.eco.crime[id] + (cooldown.crime * 1000)) - time.getTime()
            return {embeds:[citnut.defaultemb(`vui lòng đợi ${round((cd/1000), 0)} giây để tiếp tục`).setThumbnail(avt)],allowedMentions:citnut.allowedMentions}
        }else {
            db.eco.crime[id] = time.getTime()
            if(rate[round(random(0,1),0)]) {
                let payout = round(random(crime.min, crime.max), 0)
                db.user[id].money += payout
               
                return {embeds:[citnut.defaultemb(`| +${payout} 💵 | ví của bạn có: ${db.user[id].money} 💵`).setThumbnail(avt)],allowedMentions:citnut.allowedMentions}
            }else {
                let payout = round(random(crime.lose.min, crime.lose.max), 0)
                db.user[id].money -= payout
               
                return {embeds:[citnut.defaultemb(`| -${payout} 💵 | ví của bạn có: ${db.user[id].money} 💵`).setThumbnail(avt)],allowedMentions:citnut.allowedMentions}
            }
        }
	},
    async call (data, db) {       
        data.reply(await this.crimefunc(data,data.author.id,(data.author).displayAvatarURL({size: 1024, dynamic: true}), db))
    }
}