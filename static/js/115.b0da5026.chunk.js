(this["webpackJsonpdota-role-assistant"]=this["webpackJsonpdota-role-assistant"]||[]).push([[115],{133:function(e){e.exports=JSON.parse('{"id":47,"name":"npc_dota_hero_viper","order_id":29,"name_loc":"Viper","bio_loc":"The malevolent familiar of a sadistic wizard who captured and hoped to tame him, Viper was curiously glad to have been sprung from the sealed and unchanging subterranean Nether Reaches where his race had lived for millions of years, after tectonic slippage had sealed off the Netherdrakes in luminous caverns. Viper spent some time appearing to submit to the wizard\'s enchainments, hoping to learn what he could of the dark magics the mage practiced. But he soon realized that few spells were as deadly as the toxins that were his birthright. Exuding an acid that swiftly ate away the bars of his cage, the Netherdrake slipped free of his confines, spit poison in the old spellcaster\'s eyes, and soared out to let the world know that it had a new master.","hype_loc":"Launching <b>deadly poison from a distance</b>, Viper poses a grave threat to whomever he targets. As his various toxins <b>eat away at an enemy\'s health</b> and <b>slow their movement</b>, Viper simply does what he does best: he keeps adding more poison.","npe_desc_loc":"Poisonous toxins chip away armor and slow enemies","str_base":21,"str_gain":2.4000000953674,"agi_base":21,"agi_gain":2.5,"int_base":17,"int_gain":2,"primary_attr":1,"complexity":1,"attack_capability":2,"role_levels":[1,0,0,1,0,2,0,0,1],"damage_min":48,"damage_max":50,"attack_rate":1.7000000476837,"attack_range":575,"projectile_speed":1200,"armor":1.5,"magic_resistance":25,"movement_speed":275,"turn_rate":0.60000002384186,"sight_range_day":1800,"sight_range_night":800,"max_health":620,"health_regen":2.1000001430511,"max_mana":279,"mana_regen":0.85000002384186,"abilities":[{"id":5218,"name":"viper_poison_attack","name_loc":"Poison Attack","desc_loc":"Intensifies Viper\'s venom, adding an effect to his normal attack that applies a stacking movement speed slow and magic resistance deduction while dealing damage over time. Stacks up to %max_stacks% times.","lore_loc":"The Netherdrake\'s inborn toxic breath quickly drains the vitality of its afflicted.","notes_loc":[],"shard_loc":"Causes Poison Attack to lower armor by 1 per stack and allows it to affect buildings for 40% poison damage. Increases max stacks by 3.","scepter_loc":"","type":0,"behavior":"135176","target_team":2,"target_type":19,"flags":0,"damage":2,"immunity":4,"dispellable":2,"max_level":4,"cast_ranges":[600,640,680,720],"cast_points":[0],"channel_times":[0,0,0,0],"cooldowns":[0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[20,22,24,26],"gold_costs":[],"special_values":[{"name":"duration","values_float":[4],"values_int":[],"is_percentage":false,"heading_loc":"DURATION:"},{"name":"damage","values_float":[4,8,12,16],"values_int":[],"is_percentage":false,"heading_loc":"DAMAGE PER SECOND:"},{"name":"movement_speed","values_float":[],"values_int":[6,8,10,12],"is_percentage":true,"heading_loc":"MOVE SLOW:"},{"name":"magic_resistance","values_float":[],"values_int":[3,5,7,9],"is_percentage":true,"heading_loc":"MAGIC RESISTANCE:"},{"name":"max_stacks","values_float":[],"values_int":[5],"is_percentage":false,"heading_loc":"MAX STACKS:"},{"name":"bonus_range","values_float":[],"values_int":[25,65,105,145],"is_percentage":false,"heading_loc":""},{"name":"AbilityCastRange","values_float":[],"values_int":[600,640,680,720],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":true,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":5219,"name":"viper_nethertoxin","name_loc":"Nethertoxin","desc_loc":"Viper releases a Nethertoxin at the targeted area. Units in that area take an increasing damage over time based on how long they remain in it. Disables passives of affected units.","lore_loc":"Poison from the Nether Reaches turns wounds into fatalities, and fatigue into death.","notes_loc":[],"shard_loc":"","scepter_loc":"","type":0,"behavior":"48","target_team":0,"target_type":0,"flags":0,"damage":2,"immunity":4,"dispellable":0,"max_level":4,"cast_ranges":[900],"cast_points":[0.20000000298023],"channel_times":[0,0,0,0],"cooldowns":[14],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[85],"gold_costs":[],"special_values":[{"name":"min_damage","values_float":[],"values_int":[15,20,25,30],"is_percentage":false,"heading_loc":"MIN DPS:"},{"name":"max_damage","values_float":[],"values_int":[80,100,120,140],"is_percentage":false,"heading_loc":"MAX DPS:"},{"name":"max_duration","values_float":[4],"values_int":[],"is_percentage":false,"heading_loc":"MAX DPS DURATION:"},{"name":"radius","values_float":[],"values_int":[400],"is_percentage":false,"heading_loc":"RADIUS:"},{"name":"duration","values_float":[8],"values_int":[],"is_percentage":false,"heading_loc":"DURATION:"},{"name":"projectile_speed","values_float":[],"values_int":[2000],"is_percentage":false,"heading_loc":""},{"name":"AbilityCastRange","values_float":[],"values_int":[900],"is_percentage":false,"heading_loc":""},{"name":"AbilityCastPoint","values_float":[0.20000000298023],"values_int":[],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":5220,"name":"viper_corrosive_skin","name_loc":"Corrosive Skin","desc_loc":"Viper exudes an infectious toxin that damages and slows the attack speed of any enemy that damages it in a %max_range_tooltip% radius. The acid exudate also increases Viper\'s resistance to magic.","lore_loc":"It is not unusual for sword and shield alike to corrode in the very hands of those who attack the Netherdrake.","notes_loc":["Stacks multiplicatively with other magic damage resistance sources."],"shard_loc":"","scepter_loc":"","type":0,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":2,"immunity":4,"dispellable":2,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"duration","values_float":[4],"values_int":[],"is_percentage":false,"heading_loc":"DURATION:"},{"name":"bonus_attack_speed","values_float":[],"values_int":[8,16,24,32],"is_percentage":false,"heading_loc":"ATTACK SLOW:"},{"name":"bonus_magic_resistance","values_float":[],"values_int":[10,15,20,25],"is_percentage":true,"heading_loc":"MAGIC RESISTANCE:"},{"name":"damage","values_float":[],"values_int":[8,16,24,32],"is_percentage":false,"heading_loc":"DAMAGE PER SECOND:"},{"name":"max_range_tooltip","values_float":[],"values_int":[1400],"is_percentage":false,"heading_loc":"MAX RANGE RADIUS:"}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":5221,"name":"viper_viper_strike","name_loc":"Viper Strike","desc_loc":"Viper slows the targeted enemy unit\'s movement and attack speed while also dealing poison damage over time.  The slowing effect reduces over the duration of the poison.","lore_loc":"Once used to slay his sadistic summoner, the most powerful of Netherdrake infections spreads through the veins of those foolish enough to cross Viper.","notes_loc":[],"shard_loc":"","scepter_loc":"Decreases mana cost and cooldown. Increases cast range.","type":1,"behavior":"8","target_team":2,"target_type":19,"flags":16,"damage":2,"immunity":3,"dispellable":3,"max_level":3,"cast_ranges":[500],"cast_points":[0.30000001192093,0.30000001192093,0.30000001192093],"channel_times":[0,0,0,0],"cooldowns":[50,40,30],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[100,150,200],"gold_costs":[],"special_values":[{"name":"duration","values_float":[5],"values_int":[],"is_percentage":false,"heading_loc":"DURATION:"},{"name":"damage","values_float":[],"values_int":[80,120,160],"is_percentage":false,"heading_loc":"DAMAGE PER SECOND:"},{"name":"bonus_movement_speed","values_float":[],"values_int":[-40,-60,-80],"is_percentage":true,"heading_loc":"MOVE SLOW:"},{"name":"bonus_attack_speed","values_float":[],"values_int":[-40,-60,-80],"is_percentage":false,"heading_loc":"ATTACK SLOW:"},{"name":"mana_cost_scepter","values_float":[],"values_int":[125],"is_percentage":false,"heading_loc":"SCEPTER MANA COST:"},{"name":"cooldown_scepter","values_float":[10],"values_int":[],"is_percentage":false,"heading_loc":"SCEPTER COOLDOWN:"},{"name":"cast_range_scepter","values_float":[],"values_int":[900],"is_percentage":false,"heading_loc":"SCEPTER CAST RANGE:"},{"name":"projectile_speed","values_float":[],"values_int":[1200],"is_percentage":false,"heading_loc":""},{"name":"max_charges","values_float":[],"values_int":[2],"is_percentage":false,"heading_loc":""},{"name":"charge_restore_time","values_float":[30],"values_int":[],"is_percentage":false,"heading_loc":""},{"name":"AbilityCastRange","values_float":[],"values_int":[500],"is_percentage":false,"heading_loc":""},{"name":"AbilityCastPoint","values_float":[0.30000001192093,0.30000001192093,0.30000001192093],"values_int":[],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":true,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0}],"talents":[{"id":5906,"name":"special_bonus_attack_speed_20","name_loc":"+{s:value} Attack Speed","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[20],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":6565,"name":"special_bonus_spell_lifesteal_8","name_loc":"{s:value}% Spell Lifesteal","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[8],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":5943,"name":"special_bonus_attack_range_100","name_loc":"+{s:value} Attack Range","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[100],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":5993,"name":"special_bonus_hp_300","name_loc":"+{s:value} Health","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[300],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":6165,"name":"special_bonus_unique_viper_2","name_loc":"+{s:value} Viper Strike DPS","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[80],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":5942,"name":"special_bonus_attack_damage_70","name_loc":"+{s:value} Damage","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[70],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":645,"name":"special_bonus_unique_viper_5","name_loc":"-{s:value}s Nethertoxin Cooldown","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[11],"values_int":[],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":717,"name":"special_bonus_unique_viper_6","name_loc":"{s:value}x Corrosive Skin Slow and Resistance","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[2],"values_int":[],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0}]}')}}]);
//# sourceMappingURL=115.b0da5026.chunk.js.map