(this["webpackJsonpdota-role-assistant"]=this["webpackJsonpdota-role-assistant"]||[]).push([[53],{71:function(e){e.exports=JSON.parse('{"id":54,"name":"npc_dota_hero_life_stealer","order_id":61,"name_loc":"Lifestealer","bio_loc":"In the dungeons of Devarque, a vengeful wizard lay in shackles, plotting his escape. He shared his cell with a gibbering creature known as N\'aix, a thief cursed by the Vile Council with longevity, so that its life-sentence for theft and cozening might be as punishing as possible. Over the years, its chains had corroded, along with its sanity; N\'aix retained no memory of its former life and no longer dreamt of escape.\\r\\n\\t\\t\\t\\t<br><br>Seeing a perfect vessel for his plans, the wizard wove a spell of Infestation and cast his life-force into N\'aix\'s body, intending to compel N\'aix to sacrifice itself in a frenzy of violence while the mage returned to his body and crept away unnoticed. Instead, the wizard found his mind caught in a vortex of madness so powerful that it swept away his plans and shattered his will. Jarred to consciousness by the sudden infusion of fresh life, N\'aix woke from its nightmare of madness and obeyed the disembodied voice that filled its skull, which had only the one thought: To escape.\\r\\n\\t\\t\\t\\t<br><br>In that moment Lifestealer was born. The creature cast its mind into dungeon guards and soldiers, compelling them to open locks and cut down their companions, opening an unobstructed path to freedom while feeding on their lives. Lifestealer still wears the broken shackles as a warning that none may hold him, but on the inside remains a prisoner. Two minds inhabit the single form--a nameless creature of malevolent cunning, and the Master whose voice he pretends to obey.","hype_loc":"Should Lifestealer get close to his prey, there is little that can save them. Travelling within a creep or an allied hero, once he nears a foe he explodes from his host body, <b>surprising enemies</b> and tearing into them with his <b>claws.</b>","npe_desc_loc":"Infests other units for mobility and strength","str_base":25,"str_gain":2.4000000953674,"agi_base":18,"agi_gain":2.4000000953674,"int_base":15,"int_gain":1.7999999523163,"primary_attr":0,"complexity":2,"attack_capability":1,"role_levels":[2,0,0,1,1,2,1,0,0],"damage_min":47,"damage_max":53,"attack_rate":1.7000000476837,"attack_range":150,"projectile_speed":900,"armor":4,"magic_resistance":25,"movement_speed":325,"turn_rate":0.89999997615814,"sight_range_day":1800,"sight_range_night":800,"max_health":700,"health_regen":2.5,"max_mana":255,"mana_regen":0.75,"abilities":[{"id":5249,"name":"life_stealer_rage","name_loc":"Rage","desc_loc":"Launch into a maddened rage, becoming Spell Immune, and gaining increased movement speed.\\n\\nDISPEL TYPE: Basic Dispel","lore_loc":"The madness and brutality of N\'aix makes him a vicious and unrelenting foe in combat.","notes_loc":["Upon casting, many buffs and debuffs will be removed."],"shard_loc":"","scepter_loc":"","type":0,"behavior":"2052","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":3,"max_level":4,"cast_ranges":[0],"cast_points":[0],"channel_times":[0,0,0,0],"cooldowns":[18],"durations":[3,4,5,6],"damages":[0,0,0,0],"mana_costs":[75,100,125,150],"gold_costs":[],"special_values":[{"name":"movement_speed_bonus","values_float":[],"values_int":[15,16,17,18],"is_percentage":true,"heading_loc":"MOVE SPEED BONUS:"},{"name":"duration","values_float":[3,4,5,6],"values_int":[],"is_percentage":false,"heading_loc":"DURATION:"},{"name":"AbilityDuration","values_float":[3,4,5,6],"values_int":[],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":5250,"name":"life_stealer_feast","name_loc":"Feast","desc_loc":"Lifestealer\'s attacks deal damage and provide heal for a percentage of his target\'s max health.","lore_loc":"After escaping from his cell in Devarque, N\'aix subsisted on flesh and bones of those unfortunate to cross his path.","notes_loc":["Does not affect Roshan.","Affects Spell Immune units.","The heal is independent of the damage.","Stacks additively with other sources of Lifesteal."],"shard_loc":"","scepter_loc":"","type":0,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":3,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"hp_leech_percent","values_float":[1.6000000238419,2.2000000476837,2.7999999523163,3.4000000953674],"values_int":[],"is_percentage":true,"heading_loc":"MAX HEALTH LIFE STEAL:"},{"name":"hp_damage_percent","values_float":[0.60000002384186,0.80000001192093,1,1.2000000476837],"values_int":[],"is_percentage":true,"heading_loc":"MAX HEALTH DAMAGE:"}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":631,"name":"life_stealer_ghoul_frenzy","name_loc":"Ghoul Frenzy","desc_loc":"Passively causes Lifestealer\'s attacks to significantly slow enemy movement speed for %duration% seconds. Grants you Attack Speed.","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":0,"behavior":"2","target_team":2,"target_type":19,"flags":0,"damage":0,"immunity":4,"dispellable":2,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"movement_slow","values_float":[],"values_int":[10,15,20,25],"is_percentage":true,"heading_loc":"MOVEMENT SLOW:"},{"name":"duration","values_float":[1.5],"values_int":[],"is_percentage":false,"heading_loc":"DURATION:"},{"name":"attack_speed_bonus","values_float":[],"values_int":[20,30,40,50],"is_percentage":false,"heading_loc":"BONUS ATTACK SPEED:"}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":5251,"name":"life_stealer_open_wounds","name_loc":"Open Wounds","desc_loc":"Lifestealer rends an enemy unit, slowing the victim\'s movement speed and allowing all allies to regain health for a percentage of the damage they deal to that unit. All damage dealt will steal life, including damage from spells. The victim recovers movement speed over the duration. Deals 2% of the target\'s max health per attack on the target from real heroes.","lore_loc":"Fresh wounds and the scent of blood often draw out the scavengers to finish the job.","notes_loc":["Open Wounds slows over 8 different steps: 50% / 50% / 40% / 30% / 20% / 10% / 10% / 10%, with the slow decreasing one step per second.","Stacks additively with other sources of Lifesteal."],"shard_loc":"","scepter_loc":"","type":0,"behavior":"8589934601","target_team":2,"target_type":19,"flags":0,"damage":0,"immunity":4,"dispellable":2,"max_level":1,"cast_ranges":[800],"cast_points":[0.20000000298023],"channel_times":[0,0,0,0],"cooldowns":[15],"durations":[8],"damages":[0,0,0,0],"mana_costs":[75],"gold_costs":[],"special_values":[{"name":"slow_steps","values_float":[],"values_int":[-50,-50,-40,-30,-20,-10,-10,-10],"is_percentage":false,"heading_loc":""},{"name":"heal_percent","values_float":[],"values_int":[50],"is_percentage":true,"heading_loc":"LIFE STEAL:"},{"name":"slow_tooltip","values_float":[],"values_int":[50],"is_percentage":true,"heading_loc":"MAX SLOW:"},{"name":"duration","values_float":[],"values_int":[8],"is_percentage":false,"heading_loc":"DURATION:"},{"name":"AbilityCastRange","values_float":[],"values_int":[800],"is_percentage":false,"heading_loc":"CAST RANGE:"},{"name":"AbilityDuration","values_float":[8],"values_int":[],"is_percentage":false,"heading_loc":""},{"name":"AbilityCastPoint","values_float":[0.20000000298023],"values_int":[],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":true,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":5252,"name":"life_stealer_infest","name_loc":"Infest","desc_loc":"Lifestealer infests the body of a target unit, becoming undetectable, and healing for a portion of his max hitpoints every second while inside. He can then explode from the host body, dealing damage to nearby enemies. If the infested unit is an enemy creep or a neutral creep, he can take control of the unit\'s ability to move and attack. Does not work on enemy heroes.\\n\\nDISPEL TYPE: Basic Dispel","lore_loc":"With this infestation, N\'aix consumes the life blood of the host, restoring him back to full unholy power.","notes_loc":["If the infested unit dies before Lifestealer consumes it, no health is gained.","Lifestealer gains experience while under the effects of Infest.","Creeps that are controlled while Infested share Lifestealer\'s movement speed.","Infest Level 2 and 3 can be used on Ancient creeps."],"shard_loc":"","scepter_loc":"Allows Infesting enemy heroes for 5 seconds, attacking their insides once every 1.25 seconds and doubling Lifestealer\'s regen rate. Increases cast range to 500 and reduces cooldown to 20 seconds.","type":1,"behavior":"33554440","target_team":4,"target_type":128,"flags":16,"damage":2,"immunity":1,"dispellable":3,"max_level":3,"cast_ranges":[150],"cast_points":[0.20000000298023],"channel_times":[0,0,0,0],"cooldowns":[100,75,50],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[100,150,200],"gold_costs":[],"special_values":[{"name":"radius","values_float":[],"values_int":[700],"is_percentage":false,"heading_loc":"DAMAGE RADIUS:"},{"name":"damage","values_float":[],"values_int":[150,275,400],"is_percentage":false,"heading_loc":"DAMAGE:"},{"name":"damage_increase_pct","values_float":[],"values_int":[50],"is_percentage":false,"heading_loc":""},{"name":"bonus_movement_speed","values_float":[],"values_int":[15,20,25],"is_percentage":true,"heading_loc":"MOVEMENT SPEED:"},{"name":"bonus_health","values_float":[],"values_int":[400,800,1200],"is_percentage":false,"heading_loc":"HEALTH BONUS:"},{"name":"cooldown_scepter","values_float":[],"values_int":[20],"is_percentage":false,"heading_loc":"SCEPTER COOLDOWN:"},{"name":"cast_range_scepter","values_float":[],"values_int":[500],"is_percentage":false,"heading_loc":"SCEPTER CAST RANGE:"},{"name":"self_regen","values_float":[3,4,5],"values_int":[],"is_percentage":true,"heading_loc":"SELF MAX HP REGEN:"},{"name":"extra_armor","values_float":[],"values_int":[0],"is_percentage":false,"heading_loc":""},{"name":"extra_damage","values_float":[],"values_int":[0],"is_percentage":false,"heading_loc":""},{"name":"AbilityCastRange","values_float":[],"values_int":[150],"is_percentage":false,"heading_loc":""},{"name":"AbilityCastPoint","values_float":[0.20000000298023],"values_int":[],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":true,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0}],"talents":[{"id":5907,"name":"special_bonus_attack_speed_30","name_loc":"+{s:value} Attack Speed","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[30],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":5918,"name":"special_bonus_movement_speed_20","name_loc":"+{s:value} Movement Speed","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[20],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":6009,"name":"special_bonus_attack_damage_25","name_loc":"+{s:value} Damage","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[25],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":6423,"name":"special_bonus_hp_325","name_loc":"+{s:value} Health","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[325],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":452,"name":"special_bonus_evasion_16","name_loc":"{s:value}% Evasion","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[16],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":709,"name":"special_bonus_unique_lifestealer_6","name_loc":"+{s:value}% Ghoul Frenzy Slow","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[10],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":7012,"name":"special_bonus_unique_lifestealer_3","name_loc":"+{s:value}% Feast Lifesteal","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[1.2000000476837],"values_int":[],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":6173,"name":"special_bonus_unique_lifestealer","name_loc":"+{s:value}s Rage Duration","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[1.5],"values_int":[],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0}]}')}}]);
//# sourceMappingURL=53.89783bdf.chunk.js.map