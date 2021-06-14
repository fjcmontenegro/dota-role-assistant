(this["webpackJsonpdota-role-assistant"]=this["webpackJsonpdota-role-assistant"]||[]).push([[14],{32:function(e){e.exports=JSON.parse('{"id":4,"name":"npc_dota_hero_bloodseeker","order_id":47,"name_loc":"Bloodseeker","bio_loc":"Strygwyr the Bloodseeker is a ritually sanctioned hunter, Hound of the Flayed Twins, sent down from the mist-shrouded peaks of Xhacatocatl in search of blood. The Flayed Ones require oceanic amounts of blood to keep them sated and placated, and would soon drain their mountain empire of its populace if the priests of the high plateaus did not appease them. Strygwyr therefore goes out in search of carnage. The vital energy of any blood he lets, flows immediately to the Twins through the sacred markings on his weapons and armor. Over the years, he has come to embody the energy of a vicious hound; in battle he is savage as a jackal. Beneath the Mask of the Bloodseeker, in the rush of bloody quenching, it is said that you can sometime see the features of the Flayers taking direct possession of their Hound.","hype_loc":"Bloodseeker forces difficult decisions on his enemies. Able to drive his foes to a retreat by bathing a large area with a <b>damaging ritual</b>, his gruesome ultimate asks his opponents to <b>hold still, or die.</b>","npe_desc_loc":"Chases down low health enemies with increased speed","str_base":24,"str_gain":2.7000000476837,"agi_base":22,"agi_gain":3.4000000953674,"int_base":17,"int_gain":2,"primary_attr":1,"complexity":1,"attack_capability":1,"role_levels":[1,0,1,1,1,0,0,0,1],"damage_min":57,"damage_max":63,"attack_rate":1.7000000476837,"attack_range":150,"projectile_speed":900,"armor":5.6666669845581,"magic_resistance":25,"movement_speed":300,"turn_rate":0.60000002384186,"sight_range_day":1800,"sight_range_night":800,"max_health":680,"health_regen":2.4000000953674,"max_mana":279,"mana_regen":0.85000002384186,"abilities":[{"id":5015,"name":"bloodseeker_bloodrage","name_loc":"Bloodrage","desc_loc":"Drives Bloodseeker into a bloodthirsty rage which causes him to attack faster and deal more spell damage at the cost of a percentage of his health per second. Provides half attack speed to allied heroes.","lore_loc":"Strygwyr shares his animalistic thirst for bloodshed.","notes_loc":["Bloodrage can be cast on yourself or an enemy units."],"shard_loc":"Bloodrage attacks now deal 2% of the target\u2019s max health as pure damage and heals Bloodseeker for that amount. Only works for Bloodseeker.","scepter_loc":"","type":0,"behavior":"2056","target_team":1,"target_type":1,"flags":0,"damage":0,"immunity":4,"dispellable":2,"max_level":4,"cast_ranges":[800],"cast_points":[0.20000000298023],"channel_times":[0,0,0,0],"cooldowns":[14,12,10,8],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[25],"gold_costs":[],"special_values":[{"name":"duration","values_float":[8],"values_int":[],"is_percentage":false,"heading_loc":"DURATION:"},{"name":"attack_speed","values_float":[],"values_int":[60,90,120,150],"is_percentage":false,"heading_loc":"ATTACK SPEED:"},{"name":"spell_amp","values_float":[],"values_int":[15,20,25,30],"is_percentage":false,"heading_loc":"SPELL AMPLIFICATION:"},{"name":"damage_pct","values_float":[2],"values_int":[],"is_percentage":true,"heading_loc":"MAX HEALTH DAMAGE PER SECOND:"},{"name":"AbilityCastRange","values_float":[],"values_int":[800],"is_percentage":false,"heading_loc":""},{"name":"AbilityCastPoint","values_float":[0.20000000298023],"values_int":[],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":true,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":5016,"name":"bloodseeker_blood_bath","name_loc":"Blood Rite","desc_loc":"Bloodseeker baptizes an area in sacred blood. After %delay_plus_castpoint_tooltip% seconds the ritual completes, causing any enemies caught in the area to take damage and become silenced.","lore_loc":"The Flayed Twins are ever willing to aid those who spill blood upon the field of battle.","notes_loc":["Total time is a %delay% second delay plus a %abilitycastpoint% second cast time."],"shard_loc":"","scepter_loc":"","type":0,"behavior":"48","target_team":0,"target_type":0,"flags":0,"damage":4,"immunity":4,"dispellable":2,"max_level":4,"cast_ranges":[1500],"cast_points":[0.30000001192093],"channel_times":[0,0,0,0],"cooldowns":[15,14,13,12],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[90,100,110,120],"gold_costs":[],"special_values":[{"name":"radius","values_float":[],"values_int":[600],"is_percentage":false,"heading_loc":"RITUAL AREA:"},{"name":"silence_duration","values_float":[3,4,5,6],"values_int":[],"is_percentage":false,"heading_loc":"SILENCE DURATION:"},{"name":"damage","values_float":[],"values_int":[120,160,200,240],"is_percentage":false,"heading_loc":"DAMAGE:"},{"name":"delay","values_float":[2.5999999046326],"values_int":[],"is_percentage":false,"heading_loc":""},{"name":"delay_plus_castpoint_tooltip","values_float":[2.9000000953674],"values_int":[],"is_percentage":false,"heading_loc":""},{"name":"AbilityCastRange","values_float":[],"values_int":[1500],"is_percentage":false,"heading_loc":""},{"name":"AbilityCastPoint","values_float":[0.30000001192093],"values_int":[],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":5017,"name":"bloodseeker_thirst","name_loc":"Thirst","desc_loc":"Bloodseeker is invigorated by the wounds of his enemies, restoring some life when he kills an enemy unit. Also gains bonus movement speed when an enemy hero\'s health falls below %min_bonus_pct%%%, with the bonuses increasing as their health falls further. If an enemy hero\'s health falls below %invis_threshold_pct%%%, he will also gain vision and True Sight of that hero. Bonuses stack per hero. Unlocks max movement speed for Bloodseeker.","lore_loc":"Strygwyr becomes frenzied when blood is spilled.","notes_loc":["Not triggered by Illusions.","Max movement speed and attack speed bonuses occur when an enemy\'s health is at or below %max_bonus_pct%%%.","Effects linger for %linger_duration% seconds if a target dies."],"shard_loc":"","scepter_loc":"","type":0,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":4,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"min_bonus_pct","values_float":[],"values_int":[75],"is_percentage":true,"heading_loc":"THIRST HEALTH THRESHHOLD:"},{"name":"bonus_movement_speed","values_float":[],"values_int":[14,24,34,44],"is_percentage":true,"heading_loc":"MAX THIRST MOVE SPEED:"},{"name":"hero_kill_heal","values_float":[],"values_int":[10,15,20,25],"is_percentage":true,"heading_loc":"MAX HEALTH HEAL HEROES:"},{"name":"creep_kill_heal","values_float":[],"values_int":[11,14,17,20],"is_percentage":true,"heading_loc":"MAX HEALTH HEAL CREEPS:"},{"name":"half_bonus_aoe","values_float":[],"values_int":[300],"is_percentage":false,"heading_loc":"HALF HEAL RADIUS:"},{"name":"max_bonus_pct","values_float":[],"values_int":[25],"is_percentage":false,"heading_loc":""},{"name":"visibility_threshold_pct","values_float":[],"values_int":[25],"is_percentage":true,"heading_loc":"VISIBILITY HEALTH THRESHHOLD:"},{"name":"invis_threshold_pct","values_float":[],"values_int":[25],"is_percentage":false,"heading_loc":""},{"name":"linger_duration","values_float":[4],"values_int":[],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":5018,"name":"bloodseeker_rupture","name_loc":"Rupture","desc_loc":"Causes an enemy unit\'s skin to rupture, dealing initial damage based on its current health. If the unit moves, it takes damage based on the distance moved.  The damage is dealt through spell immunity.","lore_loc":"When the Bloodseeker hunts you, injuries become fatalities.","notes_loc":[],"shard_loc":"","scepter_loc":"Grants Bloodseeker two charges of Rupture","type":1,"behavior":"8","target_team":2,"target_type":19,"flags":16,"damage":4,"immunity":3,"dispellable":3,"max_level":3,"cast_ranges":[800],"cast_points":[0.40000000596046],"channel_times":[0,0,0,0],"cooldowns":[70],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[100,150,200],"gold_costs":[],"special_values":[{"name":"duration","values_float":[10,11,12],"values_int":[],"is_percentage":false,"heading_loc":"DURATION:"},{"name":"movement_damage_pct","values_float":[],"values_int":[33,44,55],"is_percentage":true,"heading_loc":"MOVE DAMAGE:"},{"name":"hp_pct","values_float":[10],"values_int":[],"is_percentage":true,"heading_loc":"HEALTH DAMAGE:"},{"name":"damage_cap_amount","values_float":[],"values_int":[200],"is_percentage":false,"heading_loc":""},{"name":"max_charges_scepter","values_float":[],"values_int":[2],"is_percentage":false,"heading_loc":"SCEPTER CHARGES:"},{"name":"charge_restore_time_scepter","values_float":[],"values_int":[40],"is_percentage":false,"heading_loc":"SCEPTER REPLENISH TIME:"},{"name":"AbilityCastRange","values_float":[],"values_int":[800],"is_percentage":false,"heading_loc":"CAST RANGE:"},{"name":"AbilityCastPoint","values_float":[0.40000000596046],"values_int":[],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":true,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0}],"talents":[{"id":482,"name":"special_bonus_unique_bloodseeker_5","name_loc":"+{s:value} Bloodrage Attack Speed","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[30],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":5970,"name":"special_bonus_armor_7","name_loc":"+{s:value} Armor","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[7],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":6289,"name":"special_bonus_lifesteal_15","name_loc":"{s:value}% Lifesteal","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[15],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":6356,"name":"special_bonus_unique_bloodseeker_2","name_loc":"+{s:value} Blood Rite Damage","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[85],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":6357,"name":"special_bonus_unique_bloodseeker_3","name_loc":"+{s:value} Rupture Cast Range","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[475],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":5976,"name":"special_bonus_hp_400","name_loc":"+{s:value} Health","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[400],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":6230,"name":"special_bonus_unique_bloodseeker","name_loc":"-{s:value}s Blood Rite Cooldown","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[4],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":6809,"name":"special_bonus_unique_bloodseeker_4","name_loc":"+{s:value}% Max Thirst MS","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[14],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0}]}')}}]);
//# sourceMappingURL=14.55aca596.chunk.js.map