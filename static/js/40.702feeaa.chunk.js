(this["webpackJsonpdota-role-assistant"]=this["webpackJsonpdota-role-assistant"]||[]).push([[40],{58:function(e){e.exports=JSON.parse('{"id":53,"name":"npc_dota_hero_furion","order_id":32,"name_loc":"Nature\'s Prophet","bio_loc":"When Verodicia, Goddess of the Woods, had finished filling in the green places, having planted the coiled-up spirit in the seed, having lured the twining waters from deep within the rock, having sworn the sun its full attention to the growing things, she realized that her own time had reached its end, and like one of the leaves whose fate she had imprinted in the seed, she would fall without seeing the fruiting of her dream. It pained her to leave the world bereft, for the sprouts had not yet broken through the soil--and they would be tender and vulnerable to every sort of harm. She found in her seed pouch one last seed that she had missed in the sowing. She spoke a single word into the seed and swallowed it as she fell. Her vast body decomposed throughout the long winter, becoming the humus that would feed the seedlings in the spring. And on the morning of the vernal equinox, before the rest of the forest had begun to wake, that last seed ripened and burst in an instant. From it stepped Nature\'s Prophet, in full leaf, strong and wise, possessing Verodicia\'s power to foresee where he would be needed most in defense of the green places--and any who might be fortunate enough to call him an ally.","hype_loc":"Whether in the thick of battle or gathering resources for his next assault, Nature\'s Prophet seems to be everywhere. <b>Teleporting</b> at will to any location and instantly creating an <b>army of violent trees</b> to fight for him, he attacks where enemies least expect.","npe_desc_loc":"Able to teleport to any location on the map at will","str_base":21,"str_gain":2.5999999046326,"agi_base":22,"agi_gain":3.5999999046326,"int_base":23,"int_gain":3.7000000476837,"primary_attr":2,"complexity":2,"attack_capability":2,"role_levels":[1,0,1,0,3,0,1,3,0],"damage_min":50,"damage_max":60,"attack_rate":1.7000000476837,"attack_range":600,"projectile_speed":1125,"armor":3.6666667461395,"magic_resistance":25,"movement_speed":295,"turn_rate":0.60000002384186,"sight_range_day":1800,"sight_range_night":800,"max_health":620,"health_regen":2.1000001430511,"max_mana":351,"mana_regen":1.1499999761581,"abilities":[{"id":5245,"name":"furion_sprout","name_loc":"Sprout","desc_loc":"Sprouts a ring of trees around a unit, trapping it in place, and providing vision in a %vision_range% radius.","lore_loc":"Verdant overgrowth is a common ailment reported by Nature\'s Prophet\'s attackers.","notes_loc":["Sprout can be cast on any unit, or the ground.","Trees created by Sprout have the same interactions with abilities as regular trees."],"shard_loc":"Causes the first two trees destroyed with Sprout to summon Greater Treants. Can only have two Greater Treants alive.","scepter_loc":"","type":0,"behavior":"24","target_team":3,"target_type":19,"flags":512,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[625,700,775,850],"cast_points":[0.34999999403954],"channel_times":[0,0,0,0],"cooldowns":[11,10,9,8],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[70,90,110,130],"gold_costs":[],"special_values":[{"name":"vision_range","values_float":[],"values_int":[500],"is_percentage":false,"heading_loc":""},{"name":"duration","values_float":[3,4,5,6],"values_int":[],"is_percentage":false,"heading_loc":"DURATION:"},{"name":"AbilityCastRange","values_float":[],"values_int":[625,700,775,850],"is_percentage":false,"heading_loc":"CAST RANGE:"},{"name":"AbilityCastPoint","values_float":[0.34999999403954],"values_int":[],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":true,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":5246,"name":"furion_teleportation","name_loc":"Teleportation","desc_loc":"Teleports to any point on the map.","lore_loc":"The Prophet keeps his sentinel over the forest, protecting it when in need.","notes_loc":["Mana and cooldown take effect when the cast is completed.  Nature\'s Prophet will not use any mana or waste the cooldown if the spell is interrupted while casting.","When the cast begins, an effect is created at the target location, which is visible to allies and enemies."],"shard_loc":"","scepter_loc":"","type":0,"behavior":"67633168","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":3,"max_level":4,"cast_ranges":[0],"cast_points":[3,3,3,3],"channel_times":[0,0,0,0],"cooldowns":[65,50,35,20],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[50,50,50,50],"gold_costs":[],"special_values":[{"name":"AbilityCastPoint","values_float":[3,3,3,3],"values_int":[],"is_percentage":false,"heading_loc":"CAST TIME:"}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":5247,"name":"furion_force_of_nature","name_loc":"Nature\'s Call","desc_loc":"Converts an area of trees into Treants under the command of Nature\'s Prophet.","lore_loc":"Verodicia bestowed the Prophet with the ability to summon the Treant Guard, a mythical sentient army of the wild.","notes_loc":["Nature\'s Call can only create as many treants as there are trees in the target area."],"shard_loc":"","scepter_loc":"","type":0,"behavior":"48","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[750],"cast_points":[0.5,0.5,0.5,0.5],"channel_times":[0,0,0,0],"cooldowns":[37],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[130,140,150,160],"gold_costs":[],"special_values":[{"name":"area_of_effect","values_float":[],"values_int":[150,225,300,375],"is_percentage":false,"heading_loc":""},{"name":"max_treants","values_float":[],"values_int":[2,3,4,5],"is_percentage":false,"heading_loc":"TREANT COUNT:"},{"name":"duration","values_float":[60],"values_int":[],"is_percentage":false,"heading_loc":"TREANT DURATION:"},{"name":"treant_health_tooltip","values_float":[],"values_int":[550],"is_percentage":false,"heading_loc":"TREANT HEALTH:"},{"name":"treant_dmg_tooltip","values_float":[],"values_int":[18,26,34,42],"is_percentage":false,"heading_loc":"TREANT DAMAGE:"},{"name":"treant_hp_bonus","values_float":[],"values_int":[825],"is_percentage":false,"heading_loc":""},{"name":"treant_damage_bonus","values_float":[],"values_int":[27,39,51,63],"is_percentage":false,"heading_loc":""},{"name":"treant_large_hp_bonus","values_float":[],"values_int":[1320],"is_percentage":false,"heading_loc":""},{"name":"treant_large_damage_bonus","values_float":[],"values_int":[57,67,77,87],"is_percentage":false,"heading_loc":""},{"name":"AbilityCastRange","values_float":[],"values_int":[750],"is_percentage":false,"heading_loc":""},{"name":"AbilityCastPoint","values_float":[0.5,0.5,0.5,0.5],"values_int":[],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":5248,"name":"furion_wrath_of_nature","name_loc":"Wrath of Nature","desc_loc":"Damaging energy bounces around the map, striking enemies close to the cast point that are in vision. Each enemy hit beyond the first adds damage. Enemies that die under this spell grant you bonus damage for %kill_damage_duration% seconds.","lore_loc":"Nature\'s Prophet calls Verodicia\'s fury to strike down those who might ravage the wilderness.","notes_loc":["Wrath of Nature will not hit units out of vision.","Can be cast through the minimap; the nearest valid target will be selected."],"shard_loc":"","scepter_loc":"Lowers cooldown from 85 to 60. Entangles all enemies it hits. Duration scales from 2 up to 3.8 seconds at max bounce.","type":1,"behavior":"24","target_team":2,"target_type":3,"flags":0,"damage":2,"immunity":4,"dispellable":0,"max_level":3,"cast_ranges":[0],"cast_points":[0.5,0.5,0.5],"channel_times":[0,0,0,0],"cooldowns":[85],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[175,225,275],"gold_costs":[],"special_values":[{"name":"max_targets","values_float":[],"values_int":[18],"is_percentage":false,"heading_loc":"MAX TARGETS:"},{"name":"damage","values_float":[],"values_int":[115,150,185],"is_percentage":false,"heading_loc":"DAMAGE:"},{"name":"damage_percent_add","values_float":[],"values_int":[10],"is_percentage":true,"heading_loc":"ADDED DAMAGE PER BOUNCE:"},{"name":"jump_delay","values_float":[0.25],"values_int":[],"is_percentage":false,"heading_loc":""},{"name":"kill_damage","values_float":[],"values_int":[4,5,6],"is_percentage":false,"heading_loc":"BONUS DAMAGE PER UNIT:"},{"name":"kill_damage_duration","values_float":[50],"values_int":[],"is_percentage":false,"heading_loc":"BONUS DAMAGE DURATION:"},{"name":"AbilityCastPoint","values_float":[0.5,0.5,0.5],"values_int":[],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":true,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0}],"talents":[{"id":5960,"name":"special_bonus_attack_damage_20","name_loc":"+{s:value} Damage","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[20],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":470,"name":"special_bonus_unique_furion_5","name_loc":"+{s:value} Wrath of Nature Base Damage","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[30],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":6016,"name":"special_bonus_attack_speed_25","name_loc":"+{s:value} Attack Speed","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[25],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":6500,"name":"special_bonus_unique_furion_2","name_loc":"+{s:value} Treants Summoned","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[5],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":5934,"name":"special_bonus_armor_8","name_loc":"+{s:value} Armor","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[8],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":5952,"name":"special_bonus_cooldown_reduction_20","name_loc":"{s:value}% Cooldown Reduction","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[20],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":6539,"name":"special_bonus_unique_furion_3","name_loc":"Removed Teleportation Cooldown","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[1],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":6084,"name":"special_bonus_unique_furion","name_loc":"{s:value}x Treant HP/Damage","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[2.5],"values_int":[],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0}]}')}}]);
//# sourceMappingURL=40.702feeaa.chunk.js.map