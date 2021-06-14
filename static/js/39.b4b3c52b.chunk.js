(this["webpackJsonpdota-role-assistant"]=this["webpackJsonpdota-role-assistant"]||[]).push([[39],{57:function(e){e.exports=JSON.parse('{"id":41,"name":"npc_dota_hero_faceless_void","order_id":27,"name_loc":"Faceless Void","bio_loc":"Darkterror the Faceless Void is a visitor from Claszureme, a realm outside of time. It remains a mystery why this being from another dimension believes the struggle for the Nemesis Stones is worth entering our physical plane, but apparently an upset in the balance of power in this world has repercussions in adjacent dimensions. Time means nothing to Darkterror, except as a way to thwart his foes and aid his allies. His long-view of the cosmos has given him a remote, disconnected quality, although in battle he is quite capable of making it personal.","hype_loc":"Time is everything to Faceless Void. He speeds time to <b>dash between locations</b>, manipulates it to <b>dodge attacks</b>, stops it in a large area to devastate his foes, and given enough of it to gather resources, he can make himself unbelievably powerful.","npe_desc_loc":"Can freeze his enemies in time","str_base":20,"str_gain":2.4000000953674,"agi_base":19,"agi_gain":3,"int_base":15,"int_gain":1.5,"primary_attr":1,"complexity":2,"attack_capability":1,"role_levels":[2,0,0,2,0,1,1,0,3],"damage_min":56,"damage_max":62,"attack_rate":1.7000000476837,"attack_range":150,"projectile_speed":900,"armor":4.1666669845581,"magic_resistance":25,"movement_speed":300,"turn_rate":0.89999997615814,"sight_range_day":1800,"sight_range_night":800,"max_health":600,"health_regen":2.5,"max_mana":255,"mana_regen":0.75,"abilities":[{"id":5182,"name":"faceless_void_time_walk","name_loc":"Time Walk","desc_loc":"Rushes to a target location while backtracking any damage taken the last %backtrack_duration% seconds.","lore_loc":"Darkterror tears a hole in time, passing through Claszureme, and appearing back in an instant.","notes_loc":["Faceless Void is invulnerable while using Time Walk."],"shard_loc":"Grants Reverse Time Walk and increases Time Walk cast range by 400.","scepter_loc":"Applies a Time Lock proc to all units at the landing destination.","type":0,"behavior":"525328","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":1,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0.30000001192093],"channel_times":[0,0,0,0],"cooldowns":[24,18,12,6],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[40],"gold_costs":[],"special_values":[{"name":"speed","values_float":[],"values_int":[3000],"is_percentage":false,"heading_loc":""},{"name":"range","values_float":[],"values_int":[650],"is_percentage":false,"heading_loc":"RANGE:"},{"name":"backtrack_duration","values_float":[2],"values_int":[],"is_percentage":false,"heading_loc":"BACKTRACK DURATION:"},{"name":"radius_scepter","values_float":[],"values_int":[350],"is_percentage":false,"heading_loc":"SCEPTER TIMELOCK RADIUS:"},{"name":"AbilityCastPoint","values_float":[0.30000001192093],"values_int":[],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":true,"ability_has_shard":true,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":5691,"name":"faceless_void_time_dilation","name_loc":"Time Dilation","desc_loc":"Faceless Void traps all nearby enemies in a time dilation field for %duration% seconds, extending their cooldowns and slowing their movement and attack speed by %slow%%% for each cooldown extended. Deals damage per second for each cooldown.","lore_loc":"For those facing off against Darkterror, each moment seems to stretch into eternity.","notes_loc":["Does not affect item cooldowns."],"shard_loc":"","scepter_loc":"","type":0,"behavior":"4","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":4,"dispellable":2,"max_level":4,"cast_ranges":[0],"cast_points":[0.10000000149012],"channel_times":[0,0,0,0],"cooldowns":[28,24,20,16],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[60,70,80,90],"gold_costs":[],"special_values":[{"name":"radius","values_float":[],"values_int":[775],"is_percentage":false,"heading_loc":"RADIUS:"},{"name":"duration","values_float":[8,9,10,11],"values_int":[],"is_percentage":false,"heading_loc":"DURATION:"},{"name":"slow","values_float":[],"values_int":[10],"is_percentage":true,"heading_loc":"SLOW PER COOLDOWN:"},{"name":"cooldown_percentage","values_float":[],"values_int":[60],"is_percentage":true,"heading_loc":"COOLDOWN PROGRESSION SLOW:"},{"name":"damage_per_stack","values_float":[],"values_int":[10,11,12,13],"is_percentage":false,"heading_loc":"DPS PER COOLDOWN:"},{"name":"AbilityCastPoint","values_float":[0.10000000149012],"values_int":[],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":5184,"name":"faceless_void_time_lock","name_loc":"Time Lock","desc_loc":"Adds the chance for an attack to lock an enemy unit in time while attacking it a second time.","lore_loc":"The strike of the Faceless Void lands with dimension shifting force.","notes_loc":[],"shard_loc":"","scepter_loc":"","type":0,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":2,"immunity":3,"dispellable":1,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"duration","values_float":[0.64999997615814],"values_int":[],"is_percentage":false,"heading_loc":"DURATION:"},{"name":"duration_creep","values_float":[2],"values_int":[],"is_percentage":false,"heading_loc":""},{"name":"chance_pct","values_float":[],"values_int":[12,16,20,24],"is_percentage":true,"heading_loc":"CHANCE:"},{"name":"bonus_damage","values_float":[],"values_int":[15,20,25,30],"is_percentage":false,"heading_loc":"BONUS DAMAGE:"}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":8030,"name":"faceless_void_time_walk_reverse","name_loc":"Reverse Time Walk","desc_loc":"Replaces Time Walk with Reverse Time Walk for 1.5 seconds after landing. If used in this period, you will reverse your time walk back to your previous cast location. Does not affect health or proc scepter hits.","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":0,"behavior":"8590458885","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":1,"dispellable":0,"max_level":1,"cast_ranges":[0],"cast_points":[0],"channel_times":[0,0,0,0],"cooldowns":[0.5],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0],"gold_costs":[],"special_values":[{"name":"buff_duration","values_float":[],"values_int":[3000],"is_percentage":false,"heading_loc":""},{"name":"speed","values_float":[],"values_int":[3000],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":true,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":5185,"name":"faceless_void_chronosphere","name_loc":"Chronosphere","desc_loc":"Creates a blister in spacetime, trapping all units caught in its sphere of influence and causes you to move very quickly inside it.  Only Faceless Void and any units he controls are unaffected.  Invisible enemies in the sphere will be revealed.","lore_loc":"When a rift opens to Claszureme, all poor souls caught within will likely never return.","notes_loc":["Pauses all units and buildings, friendly or enemy, except those owned by Faceless Void.","Faceless Void is never affected by Chronospheres with any owner."],"shard_loc":"","scepter_loc":"","type":1,"behavior":"48","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":3,"dispellable":3,"max_level":3,"cast_ranges":[500],"cast_points":[0.34999999403954,0.34999999403954,0.34999999403954],"channel_times":[0,0,0,0],"cooldowns":[160],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[150,225,300],"gold_costs":[],"special_values":[{"name":"radius","values_float":[],"values_int":[500],"is_percentage":false,"heading_loc":"RADIUS:"},{"name":"duration","values_float":[4,4.5,5],"values_int":[],"is_percentage":false,"heading_loc":"DURATION:"},{"name":"vision_radius","values_float":[],"values_int":[475],"is_percentage":false,"heading_loc":""},{"name":"bonus_attack_speed","values_float":[],"values_int":[0],"is_percentage":false,"heading_loc":""},{"name":"AbilityCastRange","values_float":[],"values_int":[500],"is_percentage":false,"heading_loc":""},{"name":"AbilityCastPoint","values_float":[0.34999999403954,0.34999999403954,0.34999999403954],"values_int":[],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0}],"talents":[{"id":454,"name":"special_bonus_agility_7","name_loc":"+{s:value} Agility","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[7],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":6250,"name":"special_bonus_strength_9","name_loc":"+{s:value} Strength","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[9],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":6807,"name":"special_bonus_unique_faceless_void_3","name_loc":"+{s:value} Time Lock Damage","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[55],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":5993,"name":"special_bonus_hp_300","name_loc":"+{s:value} Health","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[300],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":6210,"name":"special_bonus_attack_speed_40","name_loc":"+{s:value} Attack Speed","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[40],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":7388,"name":"special_bonus_unique_faceless_void_5","name_loc":"-{s:value}s Time Walk","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[2],"values_int":[],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":7001,"name":"special_bonus_unique_faceless_void_4","name_loc":"+{s:dodge_chance_pct}% Backtrack","desc_loc":"Grants a {s:dodge_chance_pct}% chance to avoid damage entirely.","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"dodge_chance_pct","values_float":[],"values_int":[20],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":6651,"name":"special_bonus_unique_faceless_void_2","name_loc":"+{s:value} Chronosphere AoE","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[140],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0}]}')}}]);
//# sourceMappingURL=39.b4b3c52b.chunk.js.map