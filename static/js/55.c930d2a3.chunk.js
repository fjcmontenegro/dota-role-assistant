(this["webpackJsonpdota-role-assistant"]=this["webpackJsonpdota-role-assistant"]||[]).push([[55],{73:function(e){e.exports=JSON.parse('{"id":26,"name":"npc_dota_hero_lion","order_id":9,"name_loc":"Lion","bio_loc":"Once a Grandmaster of the Demon Witch tradition of sorcery, Lion earned fame among his brethren for fighting on the side of light and righteousness. But adulation corrupts. With powers surpassed only by his ambition, the mage was seduced by a demon and turned to evil, trading his soul for prestige. After committing horrible crimes that marred his soul, he was abandoned. The demon betrayed him, striking better deals with his enemies. Such was Lion\'s rage that he followed the demon back to hell and slew it, ripping it limb from limb, taking its demonic hand for his own. However, such demonoplasty comes at a cost. Lion was transfigured by the process, his body transformed into something unrecognizable. He rose from hell, rage incarnate, slaying even those who had once called him master, and laying waste to the lands where he had once been so adored. He survives now as the sole practitioner of the Demon Witch tradition, and those who present themselves as acolytes or students are soon relieved of their mana and carried off by the faintest gust of wind.","hype_loc":"Lion gives enemies little chance to retaliate. <b>Stunning targets</b> with a damaging row of spikes, or temporarily <b>transforming them into a harmless critter</b>, even if his powerful spells aren\'t enough, he and his allies should still have all the time they need to slay their foes.","npe_desc_loc":"Steals enemy mana to fuel his own abilities","str_base":18,"str_gain":2.2000000476837,"agi_base":18,"agi_gain":1.5,"int_base":18,"int_gain":3.5,"primary_attr":2,"complexity":1,"attack_capability":2,"role_levels":[0,2,3,3,0,0,0,0,2],"damage_min":47,"damage_max":53,"attack_rate":1.7000000476837,"attack_range":600,"projectile_speed":900,"armor":3,"magic_resistance":25,"movement_speed":290,"turn_rate":0.60000002384186,"sight_range_day":1800,"sight_range_night":800,"max_health":560,"health_regen":1.8000000715256,"max_mana":291,"mana_regen":0.90000003576279,"abilities":[{"id":5044,"name":"lion_impale","name_loc":"Earth Spike","desc_loc":"Rock spikes burst from the earth along a straight path. Enemy units are hurled into the air, then are stunned and take damage when they fall.","lore_loc":"The Demon Witch exercises his demonic covenant, opening a fissure from hell.","notes_loc":["The spikes move at %speed% units per second."],"shard_loc":"","scepter_loc":"","type":0,"behavior":"134217752","target_team":2,"target_type":19,"flags":0,"damage":2,"immunity":4,"dispellable":1,"max_level":4,"cast_ranges":[575],"cast_points":[0.30000001192093,0.30000001192093,0.30000001192093,0.30000001192093],"channel_times":[0,0,0,0],"cooldowns":[12,12,12,12],"durations":[0,0,0,0],"damages":[80,140,200,260],"mana_costs":[70,100,130,160],"gold_costs":[],"special_values":[{"name":"width","values_float":[],"values_int":[125],"is_percentage":false,"heading_loc":""},{"name":"duration","values_float":[1.3999999761581,1.7999999523163,2.2000000476837,2.5999999046326],"values_int":[],"is_percentage":false,"heading_loc":"STUN DURATION:"},{"name":"length_buffer","values_float":[],"values_int":[325],"is_percentage":false,"heading_loc":""},{"name":"speed","values_float":[],"values_int":[1600],"is_percentage":false,"heading_loc":""},{"name":"#AbilityDamage","values_float":[],"values_int":[80,140,200,260],"is_percentage":false,"heading_loc":""},{"name":"AbilityCastRange","values_float":[],"values_int":[575],"is_percentage":false,"heading_loc":""},{"name":"AbilityCastPoint","values_float":[0.30000001192093,0.30000001192093,0.30000001192093,0.30000001192093],"values_int":[],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":5045,"name":"lion_voodoo","name_loc":"Hex","desc_loc":"Transforms an enemy unit into a harmless beast, with all special abilities disabled.","lore_loc":"Lion is compelled to share his transfiguration, twisting the essence of those who oppose him.","notes_loc":["Instantly destroys illusions.","The target will have a base movement speed of %movespeed%, but buffs granting maximum movement speed won\'t be disabled."],"shard_loc":"","scepter_loc":"","type":0,"behavior":"8","target_team":2,"target_type":19,"flags":0,"damage":0,"immunity":4,"dispellable":1,"max_level":4,"cast_ranges":[500],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[30,24,18,12],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[125,150,175,200],"gold_costs":[],"special_values":[{"name":"duration","values_float":[2.5,3,3.5,4],"values_int":[],"is_percentage":false,"heading_loc":"DURATION:"},{"name":"movespeed","values_float":[],"values_int":[120],"is_percentage":false,"heading_loc":""},{"name":"AbilityCastRange","values_float":[],"values_int":[500],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":5046,"name":"lion_mana_drain","name_loc":"Mana Drain","desc_loc":"CHANNELED - Absorbs the magical energies of a target enemy unit by taking mana from it every second.","lore_loc":"Lesser magi are nothing more than a source of magical restoration for the Demon Witch.","notes_loc":["Instantly destroys illusions."],"shard_loc":"Causes Mana Drain to affect up to three enemies. You become Spell Immune while channeling.","scepter_loc":"","type":0,"behavior":"134217864","target_team":2,"target_type":19,"flags":128,"damage":0,"immunity":4,"dispellable":3,"max_level":4,"cast_ranges":[850],"cast_points":[0.30000001192093,0.30000001192093,0.30000001192093,0.30000001192093],"channel_times":[5.0999999046326],"cooldowns":[15,12,9,6],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[10,10,10,10],"gold_costs":[],"special_values":[{"name":"duration","values_float":[5],"values_int":[],"is_percentage":false,"heading_loc":"CHANNEL TIME:"},{"name":"mana_per_second","values_float":[],"values_int":[20,40,60,120],"is_percentage":false,"heading_loc":"MANA PER SECOND:"},{"name":"break_distance","values_float":[],"values_int":[1100],"is_percentage":false,"heading_loc":"BREAK DISTANCE:"},{"name":"tick_interval","values_float":[0.10000000149012],"values_int":[],"is_percentage":false,"heading_loc":""},{"name":"movespeed","values_float":[],"values_int":[20,25,30,35],"is_percentage":true,"heading_loc":"MOVEMENT SLOW:"},{"name":"AbilityCastRange","values_float":[],"values_int":[850],"is_percentage":false,"heading_loc":""},{"name":"AbilityChannelTime","values_float":[5.0999999046326],"values_int":[],"is_percentage":false,"heading_loc":""},{"name":"AbilityCastPoint","values_float":[0.30000001192093,0.30000001192093,0.30000001192093,0.30000001192093],"values_int":[],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":true,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":5047,"name":"lion_finger_of_death","name_loc":"Finger of Death","desc_loc":"Rips at an enemy unit, trying to turn it inside-out. Deals massive damage and grows stronger with each life it consumes.","lore_loc":"Lion\'s disfigured hand is also the source of his greatest power, capable of flooding victims with malefic force.","notes_loc":["Finger of Death has a %damage_delay% delay before the damage is applied after the spell is cast, allowing certain abilities to avoid the damage.","Finger of Death only gains damage if the enemy hero dies within %grace_period% seconds of being affected by Finger of Death."],"shard_loc":"","scepter_loc":"Increases damage. Decreases cooldown. Finger of Death hits all units in a small area.","type":1,"behavior":"40","target_team":2,"target_type":19,"flags":0,"damage":2,"immunity":4,"dispellable":0,"max_level":3,"cast_ranges":[900],"cast_points":[0.30000001192093,0.30000001192093,0.30000001192093],"channel_times":[0,0,0,0],"cooldowns":[160,100,40],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[200,420,650],"gold_costs":[],"special_values":[{"name":"damage","values_float":[],"values_int":[600,725,850],"is_percentage":false,"heading_loc":"DAMAGE:"},{"name":"damage_scepter","values_float":[],"values_int":[725,875,1025],"is_percentage":false,"heading_loc":"SCEPTER DAMAGE:"},{"name":"damage_per_kill","values_float":[],"values_int":[40],"is_percentage":false,"heading_loc":"DAMAGE PER KILL:"},{"name":"grace_period","values_float":[3],"values_int":[],"is_percentage":false,"heading_loc":""},{"name":"damage_delay","values_float":[0.25],"values_int":[],"is_percentage":false,"heading_loc":""},{"name":"cooldown_scepter","values_float":[100,60,20],"values_int":[],"is_percentage":false,"heading_loc":"SCEPTER COOLDOWN:"},{"name":"splash_radius_scepter","values_float":[325],"values_int":[],"is_percentage":false,"heading_loc":"SCEPTER AREA OF EFFECT:"},{"name":"AbilityCastRange","values_float":[],"values_int":[900],"is_percentage":false,"heading_loc":""},{"name":"AbilityCastPoint","values_float":[0.30000001192093,0.30000001192093,0.30000001192093],"values_int":[],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":true,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0}],"talents":[{"id":5917,"name":"special_bonus_movement_speed_15","name_loc":"+{s:value} Movement Speed","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[15],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":5942,"name":"special_bonus_attack_damage_70","name_loc":"+{s:value} Damage","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[70],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":540,"name":"special_bonus_unique_lion_7","name_loc":"-{s:value}s Earth Spike Cooldown","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[2],"values_int":[],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":781,"name":"special_bonus_unique_lion_11","name_loc":"+{s:value} Max Health Per Finger of Death Kill","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[70],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":541,"name":"special_bonus_unique_lion_8","name_loc":"+{s:value} Finger of Death Damage Per Kill","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[20],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":777,"name":"special_bonus_unique_lion_10","name_loc":"Mana Drain Restores Allies","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[0],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":6389,"name":"special_bonus_unique_lion_2","name_loc":"+{s:value} Earth Spike Range","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[800],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":6678,"name":"special_bonus_unique_lion_4","name_loc":"+{s:value} AoE Hex","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[250],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0}]}')}}]);
//# sourceMappingURL=55.c930d2a3.chunk.js.map