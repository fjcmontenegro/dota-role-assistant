(this["webpackJsonpdota-role-assistant"]=this["webpackJsonpdota-role-assistant"]||[]).push([[28],{46:function(e){e.exports=JSON.parse('{"id":43,"name":"npc_dota_hero_death_prophet","order_id":62,"name_loc":"Death Prophet","bio_loc":"Krobelus was a Death Prophet--which is one way of saying she told fortunes for the wealthiest of those who wished to look beyond the veil. But after years of inquiring on behalf of others, she began to seek clues on her own fate. When death refused to yield its secrets, she tried to buy them with her life. But the ultimate price proved insufficient.\\r\\n\\t\\t\\t\\t<br><br>Death disgorged her again and again, always holding back its deepest mysteries. Her jealousy grew. Others could die for eternity--why not she? Why must she alone be cast back on the shores of life with such tiresome regularity? Why was she not worthy of the one thing all other living creatures took for granted? Still, she would not be discouraged.\\r\\n\\t\\t\\t\\t<br><br>Each time she returned from the grave, she brought a bit of death back with her. Wraiths followed her like fragments of her shattered soul; her blood grew thin and ectoplasmic; the feasting creatures of twilight took her for their kin.. She gave a little of her life with every demise, and it began to seem as if her end was in sight. With her dedication to death redoubled, and no client other than herself, Krobelus threw herself ever more fervently into death\'s abyss, intent on fulfilling the one prophecy that eluded her: That someday the Death Prophet would return from death no more.","hype_loc":"When she unleashes her <b>army of ghosts</b>, Death Prophet excels at <b>demolishing enemies</b> and their defenses alike. Leading her team\'s forces toward the enemy base with wave after damaging wave from her <b>swarm</b>, her onslaught can seem unstoppable.","npe_desc_loc":"Summons an army of ghosts to attack","str_base":19,"str_gain":3.0999999046326,"agi_base":14,"agi_gain":1.3999999761581,"int_base":24,"int_gain":3.5,"primary_attr":2,"complexity":1,"attack_capability":2,"role_levels":[1,0,1,1,0,0,0,3,0],"damage_min":47,"damage_max":57,"attack_rate":1.7000000476837,"attack_range":600,"projectile_speed":1000,"armor":3.3333334922791,"magic_resistance":25,"movement_speed":320,"turn_rate":0.80000001192093,"sight_range_day":1800,"sight_range_night":800,"max_health":580,"health_regen":1.8999999761581,"max_mana":363,"mana_regen":1.2000000476837,"abilities":[{"id":5090,"name":"death_prophet_carrion_swarm","name_loc":"Crypt Swarm","desc_loc":"Sends a swarm of winged beasts to savage enemy units in front of Death Prophet.","lore_loc":"Krobelus\' many trips to the grave gather a flock of the damned.","notes_loc":["Can hit units up to 1110 range away."],"shard_loc":"","scepter_loc":"","type":0,"behavior":"24","target_team":2,"target_type":19,"flags":0,"damage":2,"immunity":4,"dispellable":0,"max_level":4,"cast_ranges":[600],"cast_points":[0.20000000298023],"channel_times":[0,0,0,0],"cooldowns":[8,7,6,5],"durations":[0,0,0,0],"damages":[75,150,225,300],"mana_costs":[80,95,110,125],"gold_costs":[],"special_values":[{"name":"start_radius","values_float":[],"values_int":[110],"is_percentage":false,"heading_loc":""},{"name":"end_radius","values_float":[],"values_int":[300],"is_percentage":false,"heading_loc":""},{"name":"range","values_float":[],"values_int":[810],"is_percentage":false,"heading_loc":"CAST RANGE:"},{"name":"speed","values_float":[],"values_int":[1100],"is_percentage":false,"heading_loc":""},{"name":"#AbilityDamage","values_float":[],"values_int":[75,150,225,300],"is_percentage":false,"heading_loc":""},{"name":"AbilityCastRange","values_float":[],"values_int":[600],"is_percentage":false,"heading_loc":""},{"name":"AbilityCastPoint","values_float":[0.20000000298023],"values_int":[],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":5091,"name":"death_prophet_silence","name_loc":"Silence","desc_loc":"Prevents enemy units in a target area from casting spells.","lore_loc":"Peering into the veil of her opponent\'s demise, Krobelus sees a silent future.","notes_loc":["Doesn\'t prevent usage of items."],"shard_loc":"","scepter_loc":"","type":0,"behavior":"48","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":4,"dispellable":2,"max_level":4,"cast_ranges":[900],"cast_points":[0.40000000596046],"channel_times":[0,0,0,0],"cooldowns":[15,14,13,12],"durations":[3,4,5,6],"damages":[0,0,0,0],"mana_costs":[80,90,100,110],"gold_costs":[],"special_values":[{"name":"radius","values_float":[],"values_int":[425],"is_percentage":false,"heading_loc":"RADIUS:"},{"name":"duration","values_float":[3,4,5,6],"values_int":[],"is_percentage":false,"heading_loc":"DURATION:"},{"name":"AbilityCastRange","values_float":[],"values_int":[900],"is_percentage":false,"heading_loc":""},{"name":"AbilityDuration","values_float":[3,4,5,6],"values_int":[],"is_percentage":false,"heading_loc":""},{"name":"AbilityCastPoint","values_float":[0.40000000596046],"values_int":[],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":5685,"name":"death_prophet_spirit_siphon","name_loc":"Spirit Siphon","desc_loc":"Creates a spirit link between Death Prophet and an enemy unit, draining %damage% + %damage_pct%%% Max HP per second from the enemy.","lore_loc":"Krobelus willingly shows others the path she alone cannot follow.","notes_loc":["Cannot cast multiple on same target."],"shard_loc":"Increases Spirit Siphon charges by 1 and causes enemies to be feared for 2 seconds if they are siphoned for 4 seconds consecutively.","scepter_loc":"","type":0,"behavior":"134217736","target_team":2,"target_type":19,"flags":0,"damage":2,"immunity":4,"dispellable":3,"max_level":4,"cast_ranges":[500],"cast_points":[0.10000000149012],"channel_times":[0,0,0,0],"cooldowns":[0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[80],"gold_costs":[],"special_values":[{"name":"damage","values_float":[14],"values_int":[],"is_percentage":false,"heading_loc":"BASE DAMAGE:"},{"name":"damage_pct","values_float":[1,2.5,4,5.5],"values_int":[],"is_percentage":true,"heading_loc":"MAX HP AS DAMAGE:"},{"name":"haunt_duration","values_float":[6],"values_int":[],"is_percentage":false,"heading_loc":"DURATION:"},{"name":"movement_steal","values_float":[],"values_int":[0],"is_percentage":false,"heading_loc":""},{"name":"siphon_buffer","values_float":[],"values_int":[250],"is_percentage":false,"heading_loc":""},{"name":"AbilityCastRange","values_float":[],"values_int":[500],"is_percentage":false,"heading_loc":""},{"name":"AbilityCastPoint","values_float":[0.10000000149012],"values_int":[],"is_percentage":false,"heading_loc":""},{"name":"AbilityCharges","values_float":[],"values_int":[1,2,3,4],"is_percentage":false,"heading_loc":""},{"name":"AbilityChargeRestoreTime","values_float":[36,34,32,30],"values_int":[],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":true,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":5093,"name":"death_prophet_exorcism","name_loc":"Exorcism","desc_loc":"Unleashes evil spirits to drain the life of nearby enemy units and structures. At the end of the spell\'s duration, Death Prophet is healed in proportion to the damage dealt. Lasts %abilityduration% seconds.","lore_loc":"Over time, the banshee remnants of her previous lives return to haunt the present.","notes_loc":["Radius represents the area in which the spirits will acquire targets around Death Prophet.","Spirit damage isn\'t reduced by damage block abilities."],"shard_loc":"","scepter_loc":"Whenever an enemy is affected by Death Prophet\'s spells or when she attacks an enemy, a ghost will fly out, slow and hit the enemy for bonus its usual damage then return to her with life.","type":1,"behavior":"4","target_team":0,"target_type":0,"flags":0,"damage":1,"immunity":3,"dispellable":3,"max_level":3,"cast_ranges":[0],"cast_points":[0.5,0.5,0.5],"channel_times":[0,0,0,0],"cooldowns":[145],"durations":[35],"damages":[0,0,0,0],"mana_costs":[250,350,450],"gold_costs":[],"special_values":[{"name":"radius","values_float":[],"values_int":[700],"is_percentage":false,"heading_loc":"RADIUS:"},{"name":"spirits","values_float":[],"values_int":[8,16,24],"is_percentage":false,"heading_loc":"SPIRITS:"},{"name":"spirit_speed","values_float":[],"values_int":[525],"is_percentage":false,"heading_loc":""},{"name":"max_distance","values_float":[],"values_int":[2000],"is_percentage":false,"heading_loc":""},{"name":"give_up_distance","values_float":[],"values_int":[1200],"is_percentage":false,"heading_loc":""},{"name":"min_damage","values_float":[],"values_int":[59],"is_percentage":false,"heading_loc":""},{"name":"max_damage","values_float":[],"values_int":[64],"is_percentage":false,"heading_loc":""},{"name":"heal_percent","values_float":[],"values_int":[25],"is_percentage":true,"heading_loc":"LIFE DRAIN:"},{"name":"average_damage","values_float":[],"values_int":[61],"is_percentage":false,"heading_loc":"SPIRIT DAMAGE:"},{"name":"ghost_spawn_rate","values_float":[0.34999999403954],"values_int":[],"is_percentage":false,"heading_loc":""},{"name":"scepter_movespeed_slow","values_float":[],"values_int":[100],"is_percentage":true,"heading_loc":"SCEPTER MOVESPEED SLOW:"},{"name":"scepter_movespeed_debuff_duration","values_float":[0.30000001192093],"values_int":[],"is_percentage":false,"heading_loc":"SCEPTER SLOW DURATION:"},{"name":"scepter_spirit_life_duration","values_float":[],"values_int":[20],"is_percentage":false,"heading_loc":""},{"name":"scepter_spirit_bonus_damage","values_float":[],"values_int":[50],"is_percentage":true,"heading_loc":"SPIRIT BONUS DAMAGE:"},{"name":"movement_bonus","values_float":[],"values_int":[16,18,20],"is_percentage":true,"heading_loc":"MOVEMENT BONUS:"},{"name":"AbilityDuration","values_float":[35],"values_int":[],"is_percentage":false,"heading_loc":""},{"name":"AbilityCastPoint","values_float":[0.5,0.5,0.5],"values_int":[],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":true,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0}],"talents":[{"id":5939,"name":"special_bonus_attack_damage_30","name_loc":"+{s:value} Damage","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[30],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":6299,"name":"special_bonus_magic_resistance_12","name_loc":"+{s:value}% Magic Resistance","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[12],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":6628,"name":"special_bonus_unique_death_prophet_3","name_loc":"+{s:value}% Max Health Spirit Siphon","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[0.80000001192093],"values_int":[],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":832,"name":"special_bonus_movement_speed_percentage_6","name_loc":"+{s:value}% Movement Speed","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[6],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":5976,"name":"special_bonus_hp_400","name_loc":"+{s:value} Health","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[400],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":6367,"name":"special_bonus_unique_death_prophet_2","name_loc":"-{s:value}s Crypt Swarm Cooldown","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[3.5],"values_int":[],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":698,"name":"special_bonus_unique_death_prophet_5","name_loc":"-{s:value}s Spirit Siphon Replenish Time","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[20],"values_int":[],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":6191,"name":"special_bonus_unique_death_prophet","name_loc":"+{s:value} Exorcism Spirits","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[8],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0}]}')}}]);
//# sourceMappingURL=28.0d83a43d.chunk.js.map