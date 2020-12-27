const Discord = require('discord.js');

exports.run = (client, message, args) => {
	//stat 1 rolling
	var onestat1 = Math.floor(Math.random() * 6) + 1;
	var onestat2 = Math.floor(Math.random() * 6) + 1;
	var onestat3 = Math.floor(Math.random() * 6) + 1;
	var onestat4 = Math.floor(Math.random() * 6) + 1;
	//get the lowest number from the values rolled
	const onemin = Math.min(onestat1, onestat2, onestat3, onestat4);
	//final value
	var onetotal = onestat1 + onestat2 + onestat3 + onestat4 - onemin;

	//stat 2 rolling
	var twostat1 = Math.floor(Math.random() * 6) + 1;
	var twostat2 = Math.floor(Math.random() * 6) + 1;
	var twostat3 = Math.floor(Math.random() * 6) + 1;
	var twostat4 = Math.floor(Math.random() * 6) + 1;
	//get the lowest number from the values rolled
	const twomin = Math.min(twostat1, twostat2, twostat3, twostat4);
	//final value
	var twototal = twostat1 + twostat2 + twostat3 + twostat4 - twomin;

	//stat 3 rolling
	var threestat1 = Math.floor(Math.random() * 6) + 1;
	var threestat2 = Math.floor(Math.random() * 6) + 1;
	var threestat3 = Math.floor(Math.random() * 6) + 1;
	var threestat4 = Math.floor(Math.random() * 6) + 1;
	//get the lowest number from the values rolled
	const threemin = Math.min(threestat1, threestat2, threestat3, threestat4);
	//final value
	var threetotal =
		threestat1 + threestat2 + threestat3 + threestat4 - threemin;

	//stat 4 rolling
	var fourstat1 = Math.floor(Math.random() * 6) + 1;
	var fourstat2 = Math.floor(Math.random() * 6) + 1;
	var fourstat3 = Math.floor(Math.random() * 6) + 1;
	var fourstat4 = Math.floor(Math.random() * 6) + 1;
	//get the lowest number from the values rolled
	const fourmin = Math.min(fourstat1, fourstat2, fourstat3, fourstat4);
	//final value
	var fourtotal = fourstat1 + fourstat2 + fourstat3 + fourstat4 - fourmin;

	//stat 5 rolling
	var fivestat1 = Math.floor(Math.random() * 6) + 1;
	var fivestat2 = Math.floor(Math.random() * 6) + 1;
	var fivestat3 = Math.floor(Math.random() * 6) + 1;
	var fivestat4 = Math.floor(Math.random() * 6) + 1;
	//get the lowest number from the values rolled
	const fivemin = Math.min(fivestat1, fivestat2, fivestat3, fivestat4);
	//final value
	var fivetotal = fivestat1 + fivestat2 + fivestat3 + fivestat4 - fivemin;

	//stat 6 rolling
	var sixstat1 = Math.floor(Math.random() * 6) + 1;
	var sixstat2 = Math.floor(Math.random() * 6) + 1;
	var sixstat3 = Math.floor(Math.random() * 6) + 1;
	var sixstat4 = Math.floor(Math.random() * 6) + 1;
	//get the lowest number from the values rolled
	const sixmin = Math.min(sixstat1, sixstat2, sixstat3, sixstat4);
	//final value
	var sixtotal = sixstat1 + sixstat2 + sixstat3 + sixstat4 - sixmin;

	message.channel.send({
		embed: {
			color: 3447003,
			title: ':dragon_face: dndbot - stat roller',
			fields: [
				{
					//first stat
					name: `:computer: Calculation 1 (${onestat1} + ${onestat2} + ${onestat3} + ${onestat4} - ${onemin})`,
					value: `:game_die: You rolled ** ${onetotal} **`,
				},
				{
					//second stat
					name: `:computer: Calculation 2 (${twostat1} + ${twostat2} + ${twostat3} + ${twostat4} - ${twomin})`,
					value: `:game_die: You rolled ** ${twototal} **`,
				},
				{
					//third stat
					name: `:computer: Calculation 3 (${threestat1} + ${threestat2} + ${threestat3} + ${threestat4} - ${threemin})`,
					value: `:game_die: You rolled ** ${threetotal} **`,
				},
				{
					//fourth stat
					name: `:computer: Calculation 4 (${fourstat1} + ${fourstat2} + ${fourstat3} + ${fourstat4} - ${fourmin})`,
					value: `:game_die: You rolled ** ${fourtotal} **`,
				},
				{
					//fifth stat
					name: `:computer: Calculation 5 (${fivestat1} + ${fivestat2} + ${fivestat3} + ${fivestat4} - ${fivemin})`,
					value: `:game_die: You rolled ** ${fivetotal} **`,
				},
				{
					//sixth stat
					name: `:computer: Calculation 6 (${sixstat1} + ${sixstat2} + ${sixstat3} + ${sixstat4} - ${sixmin})`,
					value: `:game_die: You rolled ** ${sixtotal} **`,
				},
				{
					//fifth stat
					name: ':white_check_mark: Done calculating!',
					value: `:arrow_right: Your ** final ** values are ** ${onetotal} ** + ** ${twototal} ** + ** ${threetotal} ** + ** ${fourtotal} ** + ** ${fivetotal} ** + ** ${sixtotal} **`,
				},
			],
		},
	});
};
