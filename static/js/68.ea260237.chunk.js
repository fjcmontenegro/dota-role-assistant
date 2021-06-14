(this["webpackJsonpdota-role-assistant"]=this["webpackJsonpdota-role-assistant"]||[]).push([[68],{86:function(e){e.exports=JSON.parse('{"id":11,"name":"npc_dota_hero_nevermore","order_id":39,"name_loc":"Shadow Fiend","bio_loc":"It is said that Nevermore the Shadow Fiend has the soul of a poet, and in fact he has thousands of them. Over the ages he has claimed the souls of poets, priests, emperors, beggars, slaves, philosophers, criminals and (naturally) heroes; no sort of soul escapes him. What he does with them is unknown. No one has ever peered into the Abysm whence Nevermore reaches out like an eel from among astral rocks. Does he devour them one after another? Does he mount them along the halls of an eldritch temple, or pickle the souls in necromantic brine? Is he merely a puppet, pushed through the dimensional rift by a demonic puppeteer? Such is his evil, so intense his aura of darkness, that no rational mind may penetrate it. Of course, if you really want to know where the stolen souls go, there\'s one sure way to find out: Add your soul to his collection. Or just wait for Nevermore.","hype_loc":"<b>Capturing souls</b> from every kill he makes, Shadow Fiend is always gathering his power. Every assault, each carefully aimed raze that kills an enemy, brings him closer to <b>unleashing his gathered souls</b> in a deadly blast of scouring energy.","npe_desc_loc":"Unleashes the souls of fallen enemies for damage","str_base":19,"str_gain":2.7000000476837,"agi_base":20,"agi_gain":3.5,"int_base":18,"int_gain":2.2000000476837,"primary_attr":1,"complexity":2,"attack_capability":2,"role_levels":[2,0,3,0,0,0,0,0,0],"damage_min":39,"damage_max":45,"attack_rate":1.6000000238419,"attack_range":500,"projectile_speed":1200,"armor":4.3333334922791,"magic_resistance":25,"movement_speed":305,"turn_rate":0.89999997615814,"sight_range_day":1800,"sight_range_night":800,"max_health":580,"health_regen":2.1500000953674,"max_mana":291,"mana_regen":1.2000000476837,"abilities":[{"id":5059,"name":"nevermore_shadowraze1","name_loc":"Shadowraze","desc_loc":"Shadow Fiend razes the ground directly in front of him, dealing damage to enemy units in the area. Adds a stacking damage amplifier on the target that causes the enemy to take bonus Shadow Raze damage per stack.","lore_loc":"Nevermore\'s trademark for harvesting souls.","notes_loc":["Stack duration refreshes on stack gain."],"shard_loc":"","scepter_loc":"","type":0,"behavior":"134217732","target_team":0,"target_type":0,"flags":0,"damage":2,"immunity":4,"dispellable":2,"max_level":4,"cast_ranges":[0],"cast_points":[0.55000001192093],"channel_times":[0,0,0,0],"cooldowns":[10],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[75,80,85,90],"gold_costs":[],"special_values":[{"name":"shadowraze_damage","values_float":[],"values_int":[90,160,230,300],"is_percentage":false,"heading_loc":"BASE DAMAGE:"},{"name":"shadowraze_radius","values_float":[],"values_int":[250],"is_percentage":false,"heading_loc":""},{"name":"shadowraze_range","values_float":[],"values_int":[200],"is_percentage":false,"heading_loc":"RANGE:"},{"name":"shadowraze_cooldown","values_float":[],"values_int":[3],"is_percentage":false,"heading_loc":""},{"name":"stack_bonus_damage","values_float":[],"values_int":[50,60,70,80],"is_percentage":false,"heading_loc":"BONUS PER STACK:"},{"name":"duration","values_float":[8],"values_int":[],"is_percentage":false,"heading_loc":"STACK DURATION:"},{"name":"AbilityCastPoint","values_float":[0.55000001192093],"values_int":[],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":5062,"name":"nevermore_necromastery","name_loc":"Necromastery","desc_loc":"Shadow Fiend steals the soul from units he kills, gaining bonus damage. On death, he releases 40% of them from bondage.","lore_loc":"Harvested souls swirl in and out of the Abysm, empowering the Shadow Fiend to increase the size of his collection.","notes_loc":["Denies and neutral creeps also provide bonus damage through Necromastery."],"shard_loc":"","scepter_loc":"","type":0,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"necromastery_damage_per_soul","values_float":[],"values_int":[1,2,3,4],"is_percentage":false,"heading_loc":"DAMAGE PER SOUL:"},{"name":"necromastery_max_souls","values_float":[],"values_int":[11,14,17,20],"is_percentage":false,"heading_loc":"MAX SOULS:"},{"name":"necromastery_soul_release","values_float":[0.60000002384186],"values_int":[],"is_percentage":false,"heading_loc":""},{"name":"necromastery_max_souls_scepter","values_float":[],"values_int":[25],"is_percentage":false,"heading_loc":"SCEPTER MAX SOULS:"}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":5063,"name":"nevermore_dark_lord","name_loc":"Presence of the Dark Lord","desc_loc":"Shadow Fiend\'s presence reduces the armor of nearby enemies.","lore_loc":"Even being near Nevermore eats away at one\'s soul.","notes_loc":["Stacks fully with other armor reduction abilities and aura."],"shard_loc":"Lowers nearby enemy magic resistance by 14%%.","scepter_loc":"","type":0,"behavior":"65538","target_team":2,"target_type":0,"flags":0,"damage":0,"immunity":3,"dispellable":0,"max_level":4,"cast_ranges":[900],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"presence_armor_reduction","values_float":[],"values_int":[-4,-5,-6,-7],"is_percentage":false,"heading_loc":"REDUCTION:"},{"name":"presence_radius","values_float":[],"values_int":[1200],"is_percentage":false,"heading_loc":"RADIUS:"},{"name":"AbilityCastRange","values_float":[],"values_int":[900],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":true,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":5064,"name":"nevermore_requiem","name_loc":"Requiem of Souls","desc_loc":"Shadow Fiend gathers his captured souls to release them as lines of demonic energy. Units near Shadow Fiend when the souls are released can be damaged by several lines of energy. Any unit damaged by Requiem of Souls will be feared and have its movement speed reduced for %requiem_slow_duration% seconds for each line hit. Lines of energy are created for every soul captured through Necromastery. <br><br> Requiem of Souls is automatically cast whenever Shadow Fiend dies, regardless of its cooldown.","lore_loc":"The captured souls of those past slain are released to ravage their former allies.","notes_loc":["One line is generated from Shadow Fiend for every %requiem_soul_conversion% souls in his possession, for a maximum of 18 lines (23 lines with Scepter).","The movement reductions from Requiem of Souls go through spell immunity.","Fear and movement slow do not apply when if the Requiem was released on death."],"shard_loc":"","scepter_loc":"Increases Necromastery Max Souls and causes Requiem of Souls to return back to Shadow Fiend. The wave back to Shadow Fiend deals less damage, but heals Shadow Fiend for all the damage it dealt.","type":1,"behavior":"67108868","target_team":0,"target_type":0,"flags":0,"damage":2,"immunity":4,"dispellable":2,"max_level":3,"cast_ranges":[0],"cast_points":[1.6699999570847,1.6699999570847,1.6699999570847],"channel_times":[0,0,0,0],"cooldowns":[120,110,100],"durations":[0,0,0,0],"damages":[80,120,160],"mana_costs":[150,175,200],"gold_costs":[],"special_values":[{"name":"requiem_radius","values_float":[],"values_int":[1000],"is_percentage":false,"heading_loc":""},{"name":"requiem_reduction_ms","values_float":[],"values_int":[-25],"is_percentage":true,"heading_loc":"MOVEMENT REDUCTION:"},{"name":"requiem_slow_duration","values_float":[0.80000001192093],"values_int":[],"is_percentage":false,"heading_loc":""},{"name":"requiem_slow_duration_max","values_float":[2.4000000953674],"values_int":[],"is_percentage":false,"heading_loc":""},{"name":"requiem_reduction_radius","values_float":[],"values_int":[700],"is_percentage":false,"heading_loc":""},{"name":"requiem_soul_conversion","values_float":[],"values_int":[1],"is_percentage":false,"heading_loc":""},{"name":"requiem_line_width_start","values_float":[],"values_int":[125],"is_percentage":false,"heading_loc":""},{"name":"requiem_line_width_end","values_float":[],"values_int":[350],"is_percentage":false,"heading_loc":""},{"name":"requiem_line_speed","values_float":[],"values_int":[700],"is_percentage":false,"heading_loc":""},{"name":"soul_death_release","values_float":[0.5],"values_int":[],"is_percentage":false,"heading_loc":""},{"name":"requiem_heal_pct_scepter","values_float":[100],"values_int":[],"is_percentage":true,"heading_loc":"SCEPTER HEAL ON RETURN:"},{"name":"requiem_damage_pct_scepter","values_float":[40],"values_int":[],"is_percentage":true,"heading_loc":"SCEPTER DAMAGE ON RETURN:"},{"name":"#AbilityDamage","values_float":[],"values_int":[80,120,160],"is_percentage":false,"heading_loc":""},{"name":"AbilityCastPoint","values_float":[1.6699999570847,1.6699999570847,1.6699999570847],"values_int":[],"is_percentage":false,"heading_loc":"CAST DELAY:"}],"is_item":false,"ability_has_scepter":true,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0}],"talents":[{"id":5996,"name":"special_bonus_spell_amplify_6","name_loc":"+{s:value}% Spell Amplification","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[6],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":5906,"name":"special_bonus_attack_speed_20","name_loc":"+{s:value} Attack Speed","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[20],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":6875,"name":"special_bonus_unique_nevermore_3","name_loc":"Presence Aura Affects Building","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[0],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":5919,"name":"special_bonus_movement_speed_25","name_loc":"+{s:value} Movement Speed","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[25],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":6670,"name":"special_bonus_unique_nevermore_1","name_loc":"+{s:value} Damage Per Soul","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[3],"values_int":[],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":6070,"name":"special_bonus_unique_nevermore_2","name_loc":"+{s:value} Shadowraze Damage","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[120],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":6912,"name":"special_bonus_unique_nevermore_5","name_loc":"{s:value} Presence Aura Armor","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[-4],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":6561,"name":"special_bonus_cooldown_reduction_30","name_loc":"{s:value}% Cooldown Reduction","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[30],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0}]}')}}]);
//# sourceMappingURL=68.ea260237.chunk.js.map