(this["webpackJsonpdota-role-assistant"]=this["webpackJsonpdota-role-assistant"]||[]).push([[84],{102:function(e){e.exports=JSON.parse('{"id":15,"name":"npc_dota_hero_razor","order_id":15,"name_loc":"Razor","bio_loc":"Among the emblematic powers that populate the Underscape, Razor the Lightning Revenant is one of the most feared. With his whip of lightning, he patrols the Narrow Maze, that treacherous webwork of passages by which the souls of the dead are sorted according to their own innate intelligence, cunning and persistence. Drifting above the Maze, Razor looks down on the baffled souls below, and delivers jolts of scalding electricity that both punish and quicken the souls as they decide their own fates, hurrying on toward luminous exits or endlessly dark pits. Razor is the eternal embodiment of a dominating power, abstract and almost clinical in his application of power. Yet he has a lordly air that suggests he takes a sardonic satisfaction in his work.","hype_loc":"With a deadly <b>lightning storm</b> at his command, Razor charges into battle. Deploying a <b>sweeping ring</b> of electrified plasma to fry his enemies, he links with foes to <b>drain</b> them of their power and use it against them.","npe_desc_loc":"Steals enemy damage to add to his own","str_base":22,"str_gain":2.7999999523163,"agi_base":22,"agi_gain":2.5999999046326,"int_base":21,"int_gain":2.2000000476837,"primary_attr":1,"complexity":1,"attack_capability":2,"role_levels":[2,0,1,0,0,2,0,1,0],"damage_min":45,"damage_max":47,"attack_rate":1.7000000476837,"attack_range":475,"projectile_speed":2000,"armor":2.6666667461395,"magic_resistance":25,"movement_speed":290,"turn_rate":0.60000002384186,"sight_range_day":1800,"sight_range_night":800,"max_health":640,"health_regen":3.2000000476837,"max_mana":327,"mana_regen":1.0500000715256,"abilities":[{"id":5082,"name":"razor_plasma_field","name_loc":"Plasma Field","desc_loc":"Releases a wave of energetic plasma that grows in power as it expands, but also zaps on contraction, slowing and dealing damage to enemy units caught in its path. Damage and slow increases with distance from Razor. The Plasma Field hits each unit twice, once each direction.","lore_loc":"The Lightning Revenant rules the Underscape with plasmatic power.","notes_loc":[],"shard_loc":"","scepter_loc":"","type":0,"behavior":"2052","target_team":0,"target_type":0,"flags":0,"damage":2,"immunity":4,"dispellable":2,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[13,12,11,10],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[125,125,125,125],"gold_costs":[],"special_values":[{"name":"damage_min","values_float":[],"values_int":[35,40,45,50],"is_percentage":false,"heading_loc":"DAMAGE MIN:"},{"name":"damage_max","values_float":[],"values_int":[80,115,150,185],"is_percentage":false,"heading_loc":"DAMAGE MAX:"},{"name":"radius","values_float":[],"values_int":[700],"is_percentage":false,"heading_loc":"RADIUS:"},{"name":"speed","values_float":[],"values_int":[636],"is_percentage":false,"heading_loc":""},{"name":"slow_min","values_float":[],"values_int":[5],"is_percentage":true,"heading_loc":"SLOW MIN:"},{"name":"slow_max","values_float":[],"values_int":[25,30,35,40],"is_percentage":true,"heading_loc":"SLOW MAX:"},{"name":"slow_duration","values_float":[1.5],"values_int":[],"is_percentage":false,"heading_loc":"SLOW DURATION:"}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":5083,"name":"razor_static_link","name_loc":"Static Link","desc_loc":"Creates a charged link between Razor and an enemy Hero, stealing damage from the target and giving it to Razor. Allows razor to attack while moving with the link active.","lore_loc":"Razor\'s polarity channels electricity into his being, draining the power of his opposition.","notes_loc":["The link is broken when either unit dies or the distance between them becomes %drain_range_buffer% units greater than Static Link\'s cast range.","Can target Spell Immune units."],"shard_loc":"","scepter_loc":"","type":0,"behavior":"134217736","target_team":2,"target_type":1,"flags":16,"damage":0,"immunity":3,"dispellable":3,"max_level":4,"cast_ranges":[550],"cast_points":[0.30000001192093,0.30000001192093,0.30000001192093,0.30000001192093],"channel_times":[0,0,0,0],"cooldowns":[40,35,30,25],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[65],"gold_costs":[],"special_values":[{"name":"drain_length","values_float":[5,6,7,8],"values_int":[],"is_percentage":false,"heading_loc":"LINK DURATION:"},{"name":"drain_duration","values_float":[15,16,17,18],"values_int":[],"is_percentage":false,"heading_loc":"BUFF DURATION:"},{"name":"drain_rate","values_float":[],"values_int":[7,12,17,22],"is_percentage":false,"heading_loc":"DAMAGE DRAIN RATE:"},{"name":"drain_range_buffer","values_float":[],"values_int":[250],"is_percentage":false,"heading_loc":""},{"name":"radius","values_float":[],"values_int":[200],"is_percentage":false,"heading_loc":""},{"name":"speed","values_float":[],"values_int":[900],"is_percentage":false,"heading_loc":""},{"name":"vision_radius","values_float":[],"values_int":[800],"is_percentage":false,"heading_loc":""},{"name":"vision_duration","values_float":[3.3399999141693],"values_int":[],"is_percentage":false,"heading_loc":""},{"name":"AbilityCastRange","values_float":[],"values_int":[550],"is_percentage":false,"heading_loc":""},{"name":"AbilityCastPoint","values_float":[0.30000001192093,0.30000001192093,0.30000001192093,0.30000001192093],"values_int":[],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":5084,"name":"razor_unstable_current","name_loc":"Storm Surge","desc_loc":"Passively increases Razor\'s movement speed.","lore_loc":"Merely approaching the Lightning Revenant is rewarded with shock therapy.","notes_loc":[],"shard_loc":"Causes Storm Surge to have an 18% chance when attacked, and always when targeted with a spell, to release forked lightning that strikes the target and up to 2 other enemies. Deals 150 Damage and slows them by 50% for 1.5 seconds.","scepter_loc":"","type":0,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"self_movement_speed_pct","values_float":[],"values_int":[12,16,20,24],"is_percentage":true,"heading_loc":"BONUS SPEED:"}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":true,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":5085,"name":"razor_eye_of_the_storm","name_loc":"Eye of the Storm","desc_loc":"A powerful lightning storm strikes out at enemy units with the lowest health, dealing damage and reducing their armor.","lore_loc":"Ride the lightning.","notes_loc":["Each blast targets the lowest health enemy unit within range.","Eye of the Storm will prioritize striking static linked heroes.","Successive casts of Eye of the Storm will stack."],"shard_loc":"","scepter_loc":"Causes Eye of the Storm to strike two different units instead of one and can damage structures. When striking buildings, it will only target towers, barracks, and the Ancient.","type":1,"behavior":"2052","target_team":0,"target_type":0,"flags":0,"damage":1,"immunity":3,"dispellable":3,"max_level":3,"cast_ranges":[0],"cast_points":[0],"channel_times":[0,0,0,0],"cooldowns":[80,70,60],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[100,150,200],"gold_costs":[],"special_values":[{"name":"radius","values_float":[],"values_int":[500],"is_percentage":false,"heading_loc":"RADIUS:"},{"name":"duration","values_float":[30],"values_int":[],"is_percentage":false,"heading_loc":"DURATION:"},{"name":"strike_interval","values_float":[0.69999998807907,0.60000002384186,0.5],"values_int":[],"is_percentage":false,"heading_loc":"STRIKE INTERVAL:"},{"name":"armor_reduction","values_float":[],"values_int":[1],"is_percentage":false,"heading_loc":"ARMOR REDUCTION:"},{"name":"damage","values_float":[],"values_int":[60,75,90],"is_percentage":false,"heading_loc":"DAMAGE:"}],"is_item":false,"ability_has_scepter":true,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0}],"talents":[{"id":6034,"name":"special_bonus_hp_175","name_loc":"+{s:value} Health","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[175],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":749,"name":"special_bonus_agility_9","name_loc":"+{s:value} Agility","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[9],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":6028,"name":"special_bonus_unique_razor","name_loc":"+{s:value} Static Link Damage Steal","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[5],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":6281,"name":"special_bonus_strength_14","name_loc":"+{s:value} Strength","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[14],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":5934,"name":"special_bonus_armor_8","name_loc":"+{s:value} Armor","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[8],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":6408,"name":"special_bonus_unique_razor_2","name_loc":"{s:value} Eye of the Storm Strike Interval","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[-0.10000000149012],"values_int":[],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":6030,"name":"special_bonus_attack_speed_80","name_loc":"+{s:value} Attack Speed","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[80],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":586,"name":"special_bonus_unique_razor_6","name_loc":"+{s:value} Eye of the Storm Target","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[1],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0}]}')}}]);
//# sourceMappingURL=84.9d7740ab.chunk.js.map