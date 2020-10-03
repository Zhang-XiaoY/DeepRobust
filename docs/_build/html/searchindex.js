Search.setIndex({docnames:["index","source/deeprobust","source/deeprobust.graph","source/deeprobust.graph.data","source/deeprobust.graph.defense","source/deeprobust.graph.global_attack","source/deeprobust.graph.rl","source/deeprobust.graph.targeted_attack","source/deeprobust.image","source/deeprobust.image.attack","source/deeprobust.image.defense","source/deeprobust.image.netmodels","source/modules"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.index":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["index.rst","source/deeprobust.rst","source/deeprobust.graph.rst","source/deeprobust.graph.data.rst","source/deeprobust.graph.defense.rst","source/deeprobust.graph.global_attack.rst","source/deeprobust.graph.rl.rst","source/deeprobust.graph.targeted_attack.rst","source/deeprobust.image.rst","source/deeprobust.image.attack.rst","source/deeprobust.image.defense.rst","source/deeprobust.image.netmodels.rst","source/modules.rst"],objects:{"":{deeprobust:[1,0,0,"-"]},"deeprobust.graph":{black_box:[2,0,0,"-"],data:[3,0,0,"-"],defense:[4,0,0,"-"],global_attack:[5,0,0,"-"],rl:[6,0,0,"-"],targeted_attack:[7,0,0,"-"],utils:[2,0,0,"-"]},"deeprobust.graph.black_box":{load_victim_model:[2,1,1,""],train_victim_model:[2,1,1,""]},"deeprobust.graph.data":{Dataset:[3,2,1,""],PrePtbDataset:[3,2,1,""],PtbDataset:[3,2,1,""],attacked_data:[3,0,0,"-"],dataset:[3,0,0,"-"]},"deeprobust.graph.data.Dataset":{download_npz:[3,3,1,""],get_train_val_test:[3,3,1,""],largest_connected_components:[3,3,1,""]},"deeprobust.graph.data.PrePtbDataset":{get_target_nodes:[3,3,1,""]},"deeprobust.graph.data.attacked_data":{PrePtbDataset:[3,2,1,""],PtbDataset:[3,2,1,""]},"deeprobust.graph.data.attacked_data.PrePtbDataset":{get_target_nodes:[3,3,1,""]},"deeprobust.graph.data.dataset":{Dataset:[3,2,1,""]},"deeprobust.graph.data.dataset.Dataset":{download_npz:[3,3,1,""],get_train_val_test:[3,3,1,""],largest_connected_components:[3,3,1,""]},"deeprobust.graph.defense":{GCN:[4,2,1,""],GCNJaccard:[4,2,1,""],GCNSVD:[4,2,1,""],ProGNN:[4,2,1,""],RGCN:[4,2,1,""],adv_training:[4,0,0,"-"],gcn:[4,0,0,"-"],gcn_preprocess:[4,0,0,"-"],pgd:[4,0,0,"-"],prognn:[4,0,0,"-"],r_gcn:[4,0,0,"-"]},"deeprobust.graph.defense.GCN":{fit:[4,3,1,""],initialize:[4,3,1,""],predict:[4,3,1,""],test:[4,3,1,""]},"deeprobust.graph.defense.GCNJaccard":{drop_dissimilar_edges:[4,3,1,""],fit:[4,3,1,""]},"deeprobust.graph.defense.GCNSVD":{fit:[4,3,1,""],truncatedSVD:[4,3,1,""]},"deeprobust.graph.defense.ProGNN":{fit:[4,3,1,""],test:[4,3,1,""]},"deeprobust.graph.defense.RGCN":{fit:[4,3,1,""],test:[4,3,1,""]},"deeprobust.graph.defense.adv_training":{AdvTraining:[4,2,1,""]},"deeprobust.graph.defense.adv_training.AdvTraining":{adv_train:[4,3,1,""]},"deeprobust.graph.defense.gcn":{GCN:[4,2,1,""],GraphConvolution:[4,2,1,""]},"deeprobust.graph.defense.gcn.GCN":{fit:[4,3,1,""],initialize:[4,3,1,""],predict:[4,3,1,""],test:[4,3,1,""]},"deeprobust.graph.defense.gcn.GraphConvolution":{forward:[4,3,1,""]},"deeprobust.graph.defense.gcn_preprocess":{GCNJaccard:[4,2,1,""],GCNSVD:[4,2,1,""]},"deeprobust.graph.defense.gcn_preprocess.GCNJaccard":{drop_dissimilar_edges:[4,3,1,""],fit:[4,3,1,""]},"deeprobust.graph.defense.gcn_preprocess.GCNSVD":{fit:[4,3,1,""],truncatedSVD:[4,3,1,""]},"deeprobust.graph.defense.pgd":{PGD:[4,2,1,""],ProxOperators:[4,2,1,""],SGD:[4,2,1,""]},"deeprobust.graph.defense.pgd.ProxOperators":{prox_l1:[4,3,1,""],prox_nuclear:[4,3,1,""]},"deeprobust.graph.defense.pgd.SGD":{step:[4,3,1,""]},"deeprobust.graph.defense.prognn":{EstimateAdj:[4,2,1,""],ProGNN:[4,2,1,""]},"deeprobust.graph.defense.prognn.ProGNN":{fit:[4,3,1,""],test:[4,3,1,""]},"deeprobust.graph.defense.r_gcn":{GGCL_D:[4,2,1,""],GGCL_F:[4,2,1,""],GaussianConvolution:[4,2,1,""],RGCN:[4,2,1,""]},"deeprobust.graph.defense.r_gcn.RGCN":{fit:[4,3,1,""],test:[4,3,1,""]},"deeprobust.graph.global_attack":{BaseAttack:[5,2,1,""],DICE:[5,2,1,""],MetaApprox:[5,2,1,""],Metattack:[5,2,1,""],MinMax:[5,2,1,""],NIPA:[5,2,1,""],PGDAttack:[5,2,1,""],Random:[5,2,1,""],base_attack:[5,0,0,"-"],dice:[5,0,0,"-"],mettack:[5,0,0,"-"],nipa:[5,0,0,"-"],random:[5,0,0,"-"],topology_attack:[5,0,0,"-"]},"deeprobust.graph.global_attack.BaseAttack":{attack:[5,3,1,""],check_adj:[5,3,1,""],save_adj:[5,3,1,""],save_features:[5,3,1,""]},"deeprobust.graph.global_attack.DICE":{attack:[5,3,1,""],sample_forever:[5,3,1,""]},"deeprobust.graph.global_attack.MetaApprox":{attack:[5,3,1,""]},"deeprobust.graph.global_attack.Metattack":{attack:[5,3,1,""]},"deeprobust.graph.global_attack.MinMax":{attack:[5,3,1,""]},"deeprobust.graph.global_attack.NIPA":{eval:[5,3,1,""],possible_actions:[5,3,1,""],train:[5,3,1,""]},"deeprobust.graph.global_attack.PGDAttack":{attack:[5,3,1,""]},"deeprobust.graph.global_attack.Random":{attack:[5,3,1,""],inject_nodes:[5,3,1,""],perturb_adj:[5,3,1,""],perturb_features:[5,3,1,""],sample_forever:[5,3,1,""]},"deeprobust.graph.global_attack.base_attack":{BaseAttack:[5,2,1,""]},"deeprobust.graph.global_attack.base_attack.BaseAttack":{attack:[5,3,1,""],check_adj:[5,3,1,""],save_adj:[5,3,1,""],save_features:[5,3,1,""]},"deeprobust.graph.global_attack.dice":{DICE:[5,2,1,""]},"deeprobust.graph.global_attack.dice.DICE":{attack:[5,3,1,""],sample_forever:[5,3,1,""]},"deeprobust.graph.global_attack.mettack":{BaseMeta:[5,2,1,""],MetaApprox:[5,2,1,""],Metattack:[5,2,1,""]},"deeprobust.graph.global_attack.mettack.BaseMeta":{attack:[5,3,1,""],filter_potential_singletons:[5,3,1,""],log_likelihood_constraint:[5,3,1,""]},"deeprobust.graph.global_attack.mettack.MetaApprox":{attack:[5,3,1,""]},"deeprobust.graph.global_attack.mettack.Metattack":{attack:[5,3,1,""]},"deeprobust.graph.global_attack.nipa":{NIPA:[5,2,1,""]},"deeprobust.graph.global_attack.nipa.NIPA":{eval:[5,3,1,""],possible_actions:[5,3,1,""],train:[5,3,1,""]},"deeprobust.graph.global_attack.random":{Random:[5,2,1,""]},"deeprobust.graph.global_attack.random.Random":{attack:[5,3,1,""],inject_nodes:[5,3,1,""],perturb_adj:[5,3,1,""],perturb_features:[5,3,1,""],sample_forever:[5,3,1,""]},"deeprobust.graph.global_attack.topology_attack":{MinMax:[5,2,1,""],PGDAttack:[5,2,1,""]},"deeprobust.graph.global_attack.topology_attack.MinMax":{attack:[5,3,1,""]},"deeprobust.graph.global_attack.topology_attack.PGDAttack":{attack:[5,3,1,""]},"deeprobust.graph.rl":{env:[6,0,0,"-"],nipa_config:[6,0,0,"-"],nipa_env:[6,0,0,"-"],nipa_nstep_replay_mem:[6,0,0,"-"],nipa_q_net_node:[6,0,0,"-"],nstep_replay_mem:[6,0,0,"-"],q_net_node:[6,0,0,"-"],rl_s2v_config:[6,0,0,"-"],rl_s2v_env:[6,0,0,"-"]},"deeprobust.graph.rl.env":{NodeAttackEnv:[6,2,1,""]},"deeprobust.graph.rl.env.NodeAttackEnv":{step:[6,3,1,""]},"deeprobust.graph.rl.nipa_env":{NodeInjectionEnv:[6,2,1,""]},"deeprobust.graph.rl.nipa_env.NodeInjectionEnv":{step:[6,3,1,""]},"deeprobust.graph.rl.nipa_q_net_node":{NStepQNetNode:[6,2,1,""],QNetNode:[6,2,1,""]},"deeprobust.graph.rl.q_net_node":{NStepQNetNode:[6,2,1,""],QNetNode:[6,2,1,""]},"deeprobust.graph.rl.rl_s2v_env":{NodeAttackEnv:[6,2,1,""]},"deeprobust.graph.rl.rl_s2v_env.NodeAttackEnv":{step:[6,3,1,""]},"deeprobust.graph.targeted_attack":{BaseAttack:[7,2,1,""],FGA:[7,2,1,""],IGAttack:[7,2,1,""],Nettack:[7,2,1,""],RLS2V:[7,2,1,""],RND:[7,2,1,""],base_attack:[7,0,0,"-"],fga:[7,0,0,"-"],ig_attack:[7,0,0,"-"],nettack:[7,0,0,"-"],rl_s2v:[7,0,0,"-"],rnd:[7,0,0,"-"]},"deeprobust.graph.targeted_attack.BaseAttack":{attack:[7,3,1,""],check_adj:[7,3,1,""],save_adj:[7,3,1,""],save_features:[7,3,1,""]},"deeprobust.graph.targeted_attack.FGA":{attack:[7,3,1,""]},"deeprobust.graph.targeted_attack.IGAttack":{attack:[7,3,1,""],calc_importance_edge:[7,3,1,""],calc_importance_feature:[7,3,1,""]},"deeprobust.graph.targeted_attack.Nettack":{attack:[7,3,1,""],compute_cooccurrence_constraint:[7,3,1,""],compute_new_a_hat_uv:[7,3,1,""],feature_scores:[7,3,1,""],filter_potential_singletons:[7,3,1,""],get_attacker_nodes:[7,3,1,""],reset:[7,3,1,""],struct_score:[7,3,1,""]},"deeprobust.graph.targeted_attack.RLS2V":{eval:[7,3,1,""],train:[7,3,1,""]},"deeprobust.graph.targeted_attack.RND":{add_nodes:[7,3,1,""],attack:[7,3,1,""]},"deeprobust.graph.targeted_attack.base_attack":{BaseAttack:[7,2,1,""]},"deeprobust.graph.targeted_attack.base_attack.BaseAttack":{attack:[7,3,1,""],check_adj:[7,3,1,""],save_adj:[7,3,1,""],save_features:[7,3,1,""]},"deeprobust.graph.targeted_attack.fga":{FGA:[7,2,1,""]},"deeprobust.graph.targeted_attack.fga.FGA":{attack:[7,3,1,""]},"deeprobust.graph.targeted_attack.ig_attack":{IGAttack:[7,2,1,""]},"deeprobust.graph.targeted_attack.ig_attack.IGAttack":{attack:[7,3,1,""],calc_importance_edge:[7,3,1,""],calc_importance_feature:[7,3,1,""]},"deeprobust.graph.targeted_attack.nettack":{Nettack:[7,2,1,""],compute_alpha:[7,1,1,""],compute_log_likelihood:[7,1,1,""],compute_new_a_hat_uv:[7,4,1,""],filter_singletons:[7,1,1,""],update_Sx:[7,1,1,""]},"deeprobust.graph.targeted_attack.nettack.Nettack":{attack:[7,3,1,""],compute_cooccurrence_constraint:[7,3,1,""],compute_new_a_hat_uv:[7,3,1,""],feature_scores:[7,3,1,""],filter_potential_singletons:[7,3,1,""],get_attacker_nodes:[7,3,1,""],reset:[7,3,1,""],struct_score:[7,3,1,""]},"deeprobust.graph.targeted_attack.rl_s2v":{RLS2V:[7,2,1,""]},"deeprobust.graph.targeted_attack.rl_s2v.RLS2V":{eval:[7,3,1,""],train:[7,3,1,""]},"deeprobust.graph.targeted_attack.rnd":{RND:[7,2,1,""]},"deeprobust.graph.targeted_attack.rnd.RND":{add_nodes:[7,3,1,""],attack:[7,3,1,""]},"deeprobust.graph.utils":{accuracy:[2,1,1,""],classification_margin:[2,1,1,""],degree_normalize_adj:[2,1,1,""],degree_normalize_adj_tensor:[2,1,1,""],degree_normalize_sparse_tensor:[2,1,1,""],degree_sequence_log_likelihood:[2,1,1,""],encode_onehot:[2,1,1,""],get_splits_each_class:[2,1,1,""],get_train_test:[2,1,1,""],get_train_test_labelrate:[2,1,1,""],get_train_val_test:[2,1,1,""],get_train_val_test_gcn:[2,1,1,""],is_sparse_tensor:[2,1,1,""],likelihood_ratio_filter:[2,1,1,""],normalize_adj:[2,1,1,""],normalize_adj_tensor:[2,1,1,""],normalize_feature:[2,1,1,""],normalize_sparse_tensor:[2,1,1,""],preprocess:[2,1,1,""],ravel_multiple_indices:[2,1,1,""],sparse_mx_to_torch_sparse_tensor:[2,1,1,""],tensor2onehot:[2,1,1,""],to_scipy:[2,1,1,""],to_tensor:[2,1,1,""],visualize:[2,1,1,""]},"deeprobust.image":{attack:[9,0,0,"-"],config:[8,0,0,"-"],defense:[10,0,0,"-"],evaluation_attack:[8,0,0,"-"],netmodels:[11,0,0,"-"],optimizer:[8,0,0,"-"],utils:[8,0,0,"-"]},"deeprobust.image.attack":{BPDA:[9,0,0,"-"],Nattack:[9,0,0,"-"],Universal:[9,0,0,"-"],YOPOpgd:[9,0,0,"-"],base_attack:[9,0,0,"-"],cw:[9,0,0,"-"],deepfool:[9,0,0,"-"],fgsm:[9,0,0,"-"],l2_attack:[9,0,0,"-"],lbfgs:[9,0,0,"-"],onepixel:[9,0,0,"-"],pgd:[9,0,0,"-"]},"deeprobust.image.attack.Nattack":{NATTACK:[9,2,1,""]},"deeprobust.image.attack.Nattack.NATTACK":{generate:[9,3,1,""],parse_params:[9,3,1,""]},"deeprobust.image.attack.Universal":{universal_adversarial_perturbation:[9,1,1,""]},"deeprobust.image.attack.YOPOpgd":{FASTPGD:[9,2,1,""]},"deeprobust.image.attack.YOPOpgd.FASTPGD":{single_attack:[9,3,1,""]},"deeprobust.image.attack.base_attack":{BaseAttack:[9,2,1,""]},"deeprobust.image.attack.base_attack.BaseAttack":{check_type_device:[9,3,1,""],generate:[9,3,1,""]},"deeprobust.image.attack.cw":{CarliniWagner:[9,2,1,""]},"deeprobust.image.attack.cw.CarliniWagner":{generate:[9,3,1,""],loss_function:[9,3,1,""],parse_params:[9,3,1,""],pending_f:[9,3,1,""],to_model_space:[9,3,1,""]},"deeprobust.image.attack.deepfool":{DeepFool:[9,2,1,""]},"deeprobust.image.attack.deepfool.DeepFool":{generate:[9,3,1,""],parse_params:[9,3,1,""]},"deeprobust.image.attack.fgsm":{FGSM:[9,2,1,""]},"deeprobust.image.attack.fgsm.FGSM":{generate:[9,3,1,""],parse_params:[9,3,1,""]},"deeprobust.image.attack.lbfgs":{LBFGS:[9,2,1,""]},"deeprobust.image.attack.lbfgs.LBFGS":{generate:[9,3,1,""],parse_params:[9,3,1,""]},"deeprobust.image.attack.onepixel":{Onepixel:[9,2,1,""]},"deeprobust.image.attack.onepixel.Onepixel":{generate:[9,3,1,""],parse_params:[9,3,1,""]},"deeprobust.image.attack.pgd":{PGD:[9,2,1,""]},"deeprobust.image.attack.pgd.PGD":{generate:[9,3,1,""],parse_params:[9,3,1,""]},"deeprobust.image.defense":{LIDclassifier:[10,0,0,"-"],TherEncoding:[10,0,0,"-"],YOPO:[10,0,0,"-"],base_defense:[10,0,0,"-"],fast:[10,0,0,"-"],fgsmtraining:[10,0,0,"-"],pgdtraining:[10,0,0,"-"],trades:[10,0,0,"-"]},"deeprobust.image.defense.LIDclassifier":{get_lid:[10,1,1,""],train:[10,1,1,""]},"deeprobust.image.defense.TherEncoding":{Thermometer:[10,1,1,""],one_hot:[10,1,1,""],one_hot_to_thermometer:[10,1,1,""],train:[10,1,1,""]},"deeprobust.image.defense.YOPO":{CrossEntropyWithWeightPenlty:[10,2,1,""],Hamiltonian:[10,2,1,""],torch_accuracy:[10,1,1,""],train_one_epoch:[10,1,1,""]},"deeprobust.image.defense.fgsmtraining":{FGSMtraining:[10,2,1,""]},"deeprobust.image.defense.fgsmtraining.FGSMtraining":{adv_data:[10,3,1,""],calculate_loss:[10,3,1,""],generate:[10,3,1,""],parse_params:[10,3,1,""],test:[10,3,1,""],train:[10,3,1,""]},"deeprobust.image.defense.pgdtraining":{PGDtraining:[10,2,1,""]},"deeprobust.image.defense.pgdtraining.PGDtraining":{adv_data:[10,3,1,""],calculate_loss:[10,3,1,""],generate:[10,3,1,""],parse_params:[10,3,1,""],test:[10,3,1,""],train:[10,3,1,""]},"deeprobust.image.defense.trades":{TRADES:[10,2,1,""]},"deeprobust.image.defense.trades.TRADES":{generate:[10,3,1,""],parse_params:[10,3,1,""]},"deeprobust.image.netmodels":{CNN:[11,0,0,"-"],CNN_multilayer:[11,0,0,"-"],YOPOCNN:[11,0,0,"-"],densenet:[11,0,0,"-"],preact_resnet:[11,0,0,"-"],resnet:[11,0,0,"-"],train_model:[11,0,0,"-"],vgg:[11,0,0,"-"]},"deeprobust.image.netmodels.CNN":{Net:[11,2,1,""],test:[11,1,1,""],train:[11,1,1,""]},"deeprobust.image.netmodels.CNN_multilayer":{Net:[11,2,1,""],test:[11,1,1,""],train:[11,1,1,""]},"deeprobust.image.netmodels.YOPOCNN":{Net:[11,2,1,""]},"deeprobust.image.netmodels.densenet":{Bottleneck:[11,2,1,""],DenseNet121:[11,1,1,""],DenseNet161:[11,1,1,""],DenseNet169:[11,1,1,""],DenseNet201:[11,1,1,""],DenseNet:[11,2,1,""],Transition:[11,2,1,""],densenet_cifar:[11,1,1,""],test:[11,1,1,""],train:[11,1,1,""]},"deeprobust.image.netmodels.preact_resnet":{PreActBlock:[11,2,1,""],PreActBottleneck:[11,2,1,""],PreActResNet18:[11,1,1,""],PreActResNet:[11,2,1,""]},"deeprobust.image.netmodels.resnet":{BasicBlock:[11,2,1,""],Bottleneck:[11,2,1,""],Net:[11,2,1,""]},"deeprobust.image.netmodels.train_model":{train:[11,1,1,""]},"deeprobust.image.netmodels.vgg":{VGG:[11,2,1,""],test:[11,1,1,""],train:[11,1,1,""]},"deeprobust.image.optimizer":{AdamOptimizer:[8,2,1,""],differential_evolution:[8,1,1,""]},"deeprobust.image.utils":{adjust_learning_rate:[8,1,1,""],arctanh:[8,1,1,""],create_train_dataset:[8,1,1,""],make_symlink:[8,1,1,""],onehot_like:[8,1,1,""],tab_printer:[8,1,1,""]},deeprobust:{graph:[2,0,0,"-"],image:[8,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:attribute"},terms:{"2_u":7,"70e61dee181de23fdd8d893eaa9491100e2218d7":8,"abstract":[5,7],"boolean":8,"class":[2,3,4,5,6,7,8,9,10,11],"const":9,"default":[4,5,7,8,9,11],"final":[5,8],"float":[2,4,5,7,8,9,10],"function":[2,4,8,9,10,11],"import":[2,3,4,5,7,8,9,11],"int":[2,3,4,5,7,8,9,10],"m\u0105dry":10,"new":[7,8,9],"return":[2,3,4,5,7,8,9,10],"static":4,"true":[2,3,4,5,7,8,9,10],"while":3,"z\u00fcgner":2,But:2,For:[5,7],One:[8,9,10],The:[2,3,4,5,7,8],Their:8,Then:7,There:8,Use:8,_differentialevolut:8,a1600012888:[9,10,11],a_hat:7,a_hat_squar:7,a_hat_square_u:7,a_hat_square_uv:7,a_hat_uv:7,abort_earli:9,abs:[4,6,7,8],absolut:8,access:[7,9],accord:[2,3,4],accuraci:[2,10],acm:[2,4],action:[5,6,7],activ:[4,11],adam:8,adamoptim:8,add:[5,7],add_additional_nod:7,add_nod:7,added:[5,7],adding:[2,5],addit:[5,7,8],adj:[2,3,4,5,7],adj_norm:7,adjac:[2,3,4,5,7],adjacen:3,adjcenc:4,adjust_learning_r:8,adopt:[6,7],adpot:4,adv_acc:10,adv_data:10,adv_img:9,adv_train:[1,2],adversari:[4,5,6,7,9,10],advexarrai:9,advtrain:4,against:[4,9],agent:[5,7],akhtar:9,algorithm:[7,8,9],all:[3,4,5,7,8],all_target:6,allow:[7,8,9],alpha:[4,7],alreadi:[5,8],also:[2,7,8],altern:4,alwai:8,andrew:11,ani:8,anoth:7,approach:5,approxim:[4,5,7],arbitari:7,archtectur:11,arctanh:8,area:8,arg:[4,8],argument:8,arrai:[2,4,7,8],arxiv:[4,5,6,7,9,10,11],assess:8,asset:4,assum:[2,9],atol:8,attack:[0,1,2,3,4,5,6,7,8,10],attack_featur:[5,7],attack_freq:10,attack_method:3,attack_param:9,attack_structur:[5,7],attacked_data:[1,2],attackmethod:10,attribut:[3,7,8],aurko:10,author:[4,5,6,7],automat:7,avail:[5,8],b_0:8,backbon:4,bailei:10,base:[2,4,5,7,8,9,10],base_attack:[1,2,8],base_defens:[1,8],baseattack:[5,7,9],baselin:[5,7],basemeta:5,basi:8,basic:[8,9],basicblock:11,batch:[5,7,9],batch_gener:10,batch_siz:[5,7,8,10],befor:[4,8],being:8,berkelei:8,best1bin:8,best1exp:8,best2bin:8,best2exp:8,best:[4,8],beta1:4,beta2:4,beta:10,better:[8,10],between:[2,4,5,7,10],bfg:8,bia:4,bilin_q:[5,6,7],bin:8,binari:[5,6,7,9],binary_featur:4,binary_search_step:9,binomi:8,black:[2,9],black_box:[1,12],blob:[5,7,8,9,11],block:11,blog:3,bool:[2,4,5,7,8,10],bottleneck:11,bound:8,box:9,bpda:[1,8],buckman:10,budget:10,built:8,bunch:8,bylnx209yx:5,calc_importance_edg:7,calc_importance_featur:7,calcuat:9,calcul:[2,7,8,10],calculate_loss:10,call:[9,10],callabl:[4,8],callback:8,can:[2,3,4,5,7,8],candid:8,carlini:9,carliniwagn:9,carri:8,caus:8,cfm:2,chanc:8,chandlerbang:[3,4],chang:[2,6,7,8],character:10,check:[2,5,7,9],check_adj:[5,7],check_type_devic:9,checkpoint:[5,7],checkpoint_dqn:[5,7],chi:[5,7],choic:8,choos:5,choosen:3,chosen:[5,8],cifar10:11,cifar:11,citat:[2,3],cites:3,class_num:9,classif:2,classifi:[6,9],classification_margin:2,classnum:9,clean:[4,10],clean_acc:10,clip:8,clip_max:9,clip_min:9,closur:4,cluster:8,cnn:[1,8,9],cnn_multilay:[1,8],code:[6,7,8,9,10],coeffici:4,colin:10,com:[3,4,5,6,7,8,9,10,11],compar:2,compat:8,complet:8,compon:3,comput:[2,4,5,7,9,11],compute_alpha:7,compute_cooccurrence_constraint:7,compute_log_likelihood:7,compute_new_a_hat_uv:7,conduct:7,confer:[10,11],confid:9,config:[1,4,9,12],connect:[3,4,5,7,11],consid:7,constant:8,constraint:[2,5,7,9,10],construct:8,contain:[3,5,8],content:12,continu:8,control:9,conv:11,convent:8,conver:5,converg:8,convert:[2,10],convolut:[4,11],copi:7,cora:[3,4,5,7],cora_ml:3,correspond:[2,4,5,7,11],could:[4,5,7,8],counterpart:11,cover:8,coverag:8,cpu:[2,4,5,6,7,9,10,11],creat:[3,8],create_train_dataset:8,criterion:[9,10],critic:[5,7],crossentropywithweightpenlti:10,crossov:8,csr_matrix:[2,3,5,7],cuda:[2,4,5,7,9,10,11],current:[2,3,5,8,10],currenttobest1bin:8,currenttobest1exp:8,cw2:9,cw_mnist:9,d_min:[2,7],d_new:7,d_old:7,dai:[6,7],dampen:4,danielzuegn:[3,5,7],data:[0,1,2,4,5,6,7,8,10,11],data_path:11,dataload:9,datalod:10,dataset:[1,2,4,5,7,8,9],dawn:10,debangli:[8,9],decai:4,decompos:4,decreas:8,deep:[4,7,9,10,11],deepfool:[1,8],deepwalk:2,defend:4,defens:[0,1,2,5,7,8],defense_model:10,defin:[4,8,9],degre:[2,3,5,7],degree_normalize_adj:2,degree_normalize_adj_tensor:2,degree_normalize_sparse_tensor:2,degree_sequ:2,degree_sequence_log_likelihood:2,delet:[5,7],delta:9,denot:8,dens:[2,11],densenet121:11,densenet161:11,densenet169:11,densenet201:11,densenet:[1,8],densenet_cifar:11,deprec:4,der:11,descent:[4,9],describ:[5,7,8,11],descrip_str:10,descript:8,desir:9,detail:[4,5,7,9],detector:10,determin:[7,8],devic:[2,4,5,6,7,9,10,11],dice:[1,2],dict:4,dict_of_list:6,differ:[2,3,5,7,8,11],differenti:8,differential_evolut:8,dimens:[2,4,7],dimension:10,dir:10,direct:7,directori:[3,5,7,10],disp:8,displai:8,dissimilar:4,distribut:[2,4,5,7,8],dither:8,doe:[2,7,8],doi:4,dong:10,doubl:5,down:8,download:[3,4],download_npz:3,dqn:[5,7],drawback:8,drop:[4,11],drop_dissimilar_edg:4,dropout:[4,5,7],droppin:4,dse:[5,7],dtype:[7,8],due:8,dure:9,each:[2,3,5,7,8],earli:[4,9],earlystop:4,easili:11,edg:[2,4,5,7],edu:[5,8],effect:[5,8,9],effici:8,either:3,element:8,elementwis:9,els:8,embed:7,embed_dim:[5,6,7],emploi:8,enabl:8,encod:10,encode_onehot:2,end:8,enough:7,entir:8,entri:[5,7],env:[1,2,5,7],environ:[5,6,7],epoch:[4,5,8,10,11],epoch_num:10,eps:[8,9,10],epsilon:[9,10],equat:7,erfani:10,erhan:10,eric:10,essenc:2,estim:4,estimateadj:4,estrach:10,eta:9,eval:[5,7,9],evalu:[4,5,7,8,9],evaluation_attack:[1,12],everi:7,everywher:8,evolut:8,evolv:8,exampl:[3,4,5,7,8,9,10,11],except:8,exclud:5,execut:6,exert:5,exist:8,exit:8,expect:2,explan:7,extern:5,factor:4,faculti:5,fake:7,fals:[2,3,4,5,6,7,8,9,10],far:[8,9],fashion:2,fast:[1,7,8],fastpgd:9,featur:[2,3,4,5,6,7],feature_scor:7,feature_shap:[5,7],fergu:10,ferjad:9,few:9,fga:[1,2],fgsm:[1,7,8,10],fgsmtrain:[1,8],file:[3,5,7],file_path:2,fill:8,fill_valu:2,filter:[2,7],filter_potential_singleton:[5,7],filter_singleton:7,find:8,first:[3,4,7,9],fit:[2,4,5,7,8],fix:[2,3,8],flag:8,flatten:[2,10],flip:[5,9],floattensor:[4,9],follow:[2,3,8],fool:9,form:8,format:[2,4,8],forward:4,four:3,fraction:8,framework:4,free:10,freedom:[5,7],frequenc:10,from:[2,3,4,5,6,7,8,9,11],func:8,gamma:4,gao:11,gaussian:4,gaussianconvolut:4,gaussion:4,gcn:[1,2,3,5,7],gcn_adv_train:[5,7],gcn_preprocess:[1,2],gcnjaccard:4,gcnsvd:4,gener:[3,5,7,8,9,10],gerer:9,get:[2,3,6],get_attacker_nod:7,get_lid:10,get_splits_each_class:2,get_target_nod:3,get_train_test:2,get_train_test_labelr:2,get_train_val_test:[2,3],get_train_val_test_gcn:2,ggcl:4,ggcl_d:4,ggcl_f:4,ghaoui:10,github:[3,4,5,6,7,8,9,10,11],given:[2,4,7,8,9],global:8,global_attack:[0,1,2,3],gnn:[3,4,5],good:[7,8],goodfellow:10,gpu:9,gradient:[4,7,8,9],grant:10,graph:[0,1,12],graph_adversarial_attack:[6,7],graphconvolut:4,greater:8,group:4,growth_rat:11,grpah:4,guess:8,halt:8,hamiltonian:10,hanjun:[6,7],has:[5,7,8],have:[5,7,8],haven:5,heavili:7,help:[8,11],here:[2,3,7],heurist:8,hidden:4,hierarch:5,high:9,higher:8,hot:[8,10],houl:10,how:9,html:8,http:[2,3,4,5,6,7,8,9,10,11],huang:11,hyper:4,hypercub:8,ian:10,iclr:5,icml:[6,7],icsi:8,idelbayev:11,idx_meta:[5,7],idx_test:[2,3,4,5,7],idx_train:[2,3,4,5,6,7],idx_unlabel:5,idx_val:[2,3,4,5,6,7],ieee:[9,11],ig_attack:[1,2],igattack:7,ignor:[5,7],imag:[0,1,12],implement:[4,5,6,7,8,9,10,11],implementatio:11,improv:8,in_channel1:11,in_featur:4,in_plan:11,incid:3,includ:[4,8],increas:8,index:[0,7,8],indic:[2,4,5,7,8,10],indirect:7,individu:8,inf:9,infer:6,influenc:7,init:8,initi:[4,8,9],initial_const:9,inject:[5,7],inject_nod:5,inp:9,input:[2,3,4,5,7,8,9,10],insert:[5,7],insight:[4,7],instanc:[2,3,8],integr:[6,7],intern:[5,10],interpret:3,intrigu:10,intrins:10,is_sparse_tensor:2,ist:5,item:[4,5,7],iter:[4,9,10],its:[3,8],ixs:2,jac:8,jacob:10,jame:10,januari:10,jian:11,jiao:10,jordan:10,journal:8,kaidixu:[5,7],kaim:11,karen:11,kdd:[4,7],keyword:8,kilian:11,kkew3:9,known:8,kolter:10,kuangliu:11,kwarg:[4,5,7,9,10],l2_attack:[1,8],l_p:9,label:[2,3,4,5,6,7,9],label_r:2,labl:7,lambda_:5,larg:[8,11],larger:8,largest:3,largest_connected_compon:3,latin:8,latinhypercub:8,lauren:11,law:[5,7],layer:[4,10,11],layeronetrainn:10,lbfg:[1,8],lead:[5,7],learn:[4,5,7,8,9,10,11],learning_r:[8,9],len:[7,8],length:[2,9],lesli:10,less:[8,9],level:10,lid:10,lid_adversarial_subspace_detect:10,lidclassifi:[1,8],like:8,likelihood:[2,5,7],likelihood_ratio_filt:2,lil_matrix:2,limit:9,linear:4,link_nam:8,list:[2,5,7,10],list_action_spac:[5,6,7],list_at:5,list_st:5,literatur:8,liu:11,ll_constraint:5,ll_cutoff:[5,7],load:[2,3,4,8,9],load_state_dict:9,load_victim_model:2,loader:[10,11],local:10,locat:8,log:[2,4,5,7,8,9],log_interv:10,log_likelihood_constraint:5,logit:[7,9],longtensor:2,lordwarlock:9,loss:[4,5,8,9,10],loss_funct:9,loss_typ:5,low:4,lower:8,lr_train:10,maaten:11,machin:10,made:8,magnitud:9,mai:[9,10],make:4,make_symlink:8,makelov:10,manag:3,mani:[8,9],manipul:9,map_loc:9,margin:2,mask:[3,5,7],master:[3,4,5,7,8,9,11],match:9,math:8,matrix:[2,3,4,5,7,9],max:[4,5,7,8],max_:9,max_iter:9,max_iter_df:9,max_iter_uni:9,max_lv:[5,6,7],maxepoch:11,maxim:[8,10],maximum:[2,8,9],maxit:[8,9],mean:[8,9,10],mean_field:[5,6,7],member:8,mention:7,messag:8,meta:[3,5,7],metaapprox:5,metattack:[3,5],method:[8,9,10],mettack:[1,2,3],mian:9,michael:10,min:8,min_:9,minim:8,minimium:8,minimum:[8,9],minmax:5,mislead:9,mix:8,mlp_hidden:[5,6,7],mnist:[9,11],mnist_cnn_epoch_20:9,mnist_fgsmtraining_0:10,mnist_pgdtraining_0:10,mod_adj:[5,7],mod_featur:[5,7],model:[2,4,5,7,8,9,10,11],model_nam:2,modif:[5,7],modifi:[5,6,7,8],modified_adj:[5,7],modified_adjac:2,modified_featur:7,modul:[0,12],modulo:8,momentum:[4,5,10],more:[4,5,7,8],most:10,msu:[5,7],multi:[9,11],multipl:2,multipli:8,multivari:8,must:8,mutant:8,mutat:8,n_ad:7,n_add:5,n_compon:3,n_influenc:7,n_inject:6,n_old:7,n_perturb:[5,7],name:[2,3,4,5,7,10],nattack:[1,8],natur:[8,10],nb_iter:9,nblock:11,nclass:[4,5,7],ndarrai:8,need:[2,4,8],nesterov:4,net:[5,9,10,11],netmodel:[0,1,8,9],nettack:[1,2,3],network:[3,4,5,6,7,9,10,11],neural:[4,5,6,7,9,10,11],next:[5,8],nfeat:[4,5,7],nhid:[4,5,7],nice:8,nipa:[1,2],nipa_config:[1,2],nipa_env:[1,2],nipa_nstep_replay_mem:[1,2],nipa_q_net_nod:[1,2],nnode:[2,4,5,7],node:[2,3,4,5,6,7],node_featur:6,node_label:6,node_pair:2,nodeattackenv:6,nodeinjectionenv:6,noisi:10,non:5,none:[2,3,4,5,7,8,9,10],norm:[4,9],normal:[2,4],normalize_adj:2,normalize_adj_tensor:2,normalize_featur:2,normalize_sparse_tensor:2,note:[2,3,5,7,8],npz:3,nrlweb:4,nstep_replay_mem:[1,2],nstepqnetnod:6,nuclear:4,num_block:11,num_class:[9,11],num_episod:5,num_imag:9,num_mod:[5,6,7],num_step:[6,7,9,10],num_wrong:[5,7],number:[2,4,5,7,8,9,10],numpi:[2,4,5,8],object:[5,8],obtain:8,occur:8,occurr:7,off:10,often:8,onc:[2,8,9,10,11],one:[3,5,7,8,9],one_hot:10,one_hot_to_thermomet:10,onehot:2,onehot_lik:8,onepixel:[1,8],ones:5,onli:[2,3,4,5,7,9,10,11],openreview:5,oper:[4,7],optim:[1,4,5,7,9,10,11,12],optimizeresult:8,optimizor:10,option:[4,8,10,11],order:9,org:[2,4,5,6,7,8,9],ori_adj:[5,7],ori_featur:[5,7],origin:[5,7,8,9,10,11],origina:7,original_adjac:2,other:[5,7,8],otherwis:[2,8],our:7,out:[3,8,9],out_channel1:11,out_channel2:11,out_featur:4,out_plan:11,output:[2,4,10,11],over:8,overal:8,overshoot:9,overwrit:8,packag:[0,12],page:0,painless:10,pair:[2,8],paper:[3,4,5,7,11],parallel_s:6,param:[2,4,8,9,10],paramet:[2,3,4,5,7,8,9,10,11],paremet:9,pars:9,parse_param:[9,10],parser:10,part:[6,7],pass:[3,8],path:[2,10,11],patienc:[4,5,7],pattern:11,pdf:[4,5,7,9],peform:4,penalti:4,pend:9,pending_f:9,pengcui:4,percentag:9,perform:[4,5,7,8],perspect:[5,7],perturb:[3,4,5,7,9,10],perturb_adj:5,perturb_featur:5,perturb_step_s:10,perturbed_adj:[3,4],perturbed_data:[3,4],pgd:[1,2,5,8,10],pgdattack:5,pgdtrain:[1,8],pick:4,pixel:[8,9],place:8,plane:11,poblog:3,point:8,polblog:3,polish:8,pop:8,popsiz:[8,9],popul:[8,9],population_energi:8,possibl:7,possible_act:5,possible_edg:7,potenti:[5,7],potential_edg:7,power:[5,7],powerlaw:[2,7],pre:[3,11],preact_resnet:[1,8],preactblock:11,preactbottleneck:11,preactresnet18:11,preactresnet:11,predict:4,preprint:[10,11],preprocess:[2,4,5],preprocess_adj:[2,5],preprocess_featur:2,preptbdataset:3,prevent:[8,9],previou:4,price:8,principl:10,print:[8,9],print_log:9,print_process:9,pro:[3,4],probabl:[4,8],problem:8,probs_best_second_class:2,probs_true_label:2,proceed:11,process:[4,9,10],prognn:[1,2],progress:8,propag:[9,10,11],properli:11,properti:[4,10],propos:2,protect:4,provid:[3,4],prox:4,prox_l1:4,prox_nuclear:4,proxim:4,proxoper:4,psu:5,ptb_rate:3,ptbdataset:[3,4],pubm:3,pxn:7,pygcn:4,pytorch:[3,4,7,8,9,11],q_net_nod:[1,2],qnetnod:6,queri:2,r_gcn:[1,2],radiu:8,raffel:10,rand0:8,rand1:8,rand1bin:8,rand1exp:8,rand2bin:8,rand2exp:8,random:[1,2,3,8],random_start:9,randomli:[2,5,7,8],randomst:8,randtobest1bin:8,randtobest1exp:8,rang:8,rank:4,rate:[2,4,8,9,10],ratio:[2,5,6,7],ravel_index:2,ravel_multi_index:2,ravel_multiple_indic:2,recognit:11,recombin:8,reconstruct:4,reconstructed_origin:9,redmod:10,reduc:8,reduct:11,reevalu:4,refer:[1,8,9,10],reg_cof:10,reimplement:9,reimplementaiton:11,reinforc:[5,7],rel:8,relu:4,remov:[2,4,5,7],ren:11,repeat:8,replac:8,repositori:[6,7],repres:[8,10],represent:10,reproduc:5,requir:[4,8],require_mask:3,res:8,reset:7,residu:11,resist:10,resnet18:11,resnet34:11,resnet50:11,resnet:[1,8],respect:8,result:[5,7,8],revers:2,revisit:10,reward:[5,6,7],reward_typ:[5,6,7],rgcn:4,rice:10,risk:8,rl_s2v:[1,2],rl_s2v_config:[1,2],rl_s2v_env:[1,2],rls2v:7,rnd:[1,2],robust:[4,9,10],roi:10,root:[3,4,5,7,8],roughli:[5,7],row:[2,7],rubric:10,run:6,s2v:7,s_d:7,s_old:7,same:[2,3,5,8],sampl:[2,3,5,7,8,9],sample_forev:5,sarah:10,save:[2,3,5,7,10],save_adj:[5,7],save_dir:[5,7,10],save_featur:[5,7],save_freq:10,save_model:10,save_nam:10,save_per_epoch:11,scale:11,schmidt:10,schoenebeck:10,scipi:[2,3,4,5,7,8],score:7,seach:9,search:[0,8,9],see:[2,4,5,7,8],seed:[2,3,4,8,10,11],select:[3,11],self:[3,10],sequenc:8,sequenti:8,set:[2,3,4,5,7,8,9],setup:[5,7],sever:8,sgd:4,shaoq:11,shape:[2,4,5,7,8],should:[2,3,4,5,7,8,10],show:[4,7],sigma:9,significantli:8,similar:[2,4,7],simonyan:11,simpl:[4,8],simpli:7,sinc:[3,7],singl:[4,7,8],single_attack:9,singleton:[5,7,8],singular:4,size:[2,4,5,7,8,9,10],slightli:8,slow:8,smaller:4,solut:8,solv:8,some:8,song:10,sourc:[2,3,4,5,6,7,8,9,10,11],space:[5,7,8,9],spars:[2,3,5,7],sparse_matrix:7,sparse_mx:2,sparse_mx_to_torch_sparse_tensor:2,specif:5,specifi:8,speed:8,split:[2,3],sprase:2,squar:[5,7],stabil:8,stage:5,start:[4,8],stat:10,state:5,statu:[6,8],std:[8,9],step:[4,6,7,9,10],step_siz:[9,10],still:[5,8],stochast:8,stop:[4,8,9],store:4,storn:8,str:[2,4,5,7,8,10],strategi:8,stratifi:2,stride:11,struct:7,struct_scor:7,structur:[4,5,7],submodul:[1,12],subpackag:12,subset:8,subspac:10,success:8,successfulli:8,sudanthi:10,suit:8,sum:7,sun:11,suppli:8,support:[2,3,7],surrog:[5,7],survei:9,sutskev:10,svd:4,symmetr:[4,5,7],system:8,szegedi:10,t_p:9,tab_print:8,tabular:8,take:[3,8],taken:8,target:[2,3,5,7,9,10],target_label:9,target_nod:[3,5,7],target_or_not:9,targeted_attack:[0,1,2,9],techniqu:8,tensor2onehot:2,tensor:[2,4,5,7,9,10],tensorflow:[4,5,7],term:4,termin:[8,9],test:[2,3,4,5,7,9,10,11],test_load:[10,11],test_mask:3,test_nipa:5,test_rl_s2v:7,test_siz:2,than:[4,8,9,10],thei:3,them:[3,4],theorem:7,theoret:10,therebi:8,therencod:[1,8],thermomet:10,thi:[2,3,4,5,6,7,8,9,10,11],threat:9,threshold:[2,4],through:8,thumanlab:4,thumedialab:4,tight:8,time:[8,10],tkipf:[3,4],tmp:[3,4,5,7],to_model_spac:9,to_scipi:2,to_tensor:2,tol:8,toler:8,topk:10,topolog:[5,7],topology_attack:[1,2],torch:[2,4,7,9,10],torch_accuraci:10,torch_scatt:2,torchvis:11,total:[2,8,9],toward:[9,10],tra:3,trace:4,trade:[1,8],train:[2,3,4,5,7,8,10,11],train_it:[4,5],train_load:[10,11],train_mask:3,train_model:[1,8],train_one_epoch:10,train_resnet:[1,8],train_siz:2,train_victim_model:2,trained_model:9,trainmodel:11,transform:[7,9],transit:11,tree:[3,4],tri:8,trial:8,true_label:2,truncat:4,truncatedsvd:4,truth:9,tsipra:10,tupl:[2,5,7,8],turn:7,two:[2,3,4,5,7,8],type:[2,4,5,7,8,9],under:[3,10],undirect:2,union1d:5,unit:4,univers:[1,8],universal_adversarial_perturb:9,universal_adversarial_perturbation_pytorch:9,unlabel:5,unless:8,unnorm:4,unnotic:2,unperturb:[5,7],unweight:[2,5,7],updat:[7,9],update_sx:7,upper:8,url:3,use:[3,4,8],used:[2,5,8,9,10],useful:8,user:[3,9],using:[2,10],util:[1,5,12],val:8,val_mask:3,val_siz:2,valid:[2,3,4],valu:[4,5,7,8,9],van:11,vanish:9,variabl:[5,7,8,9,10],variant:10,vector:[2,4,8],verbos:[4,7],veri:[7,11],version:[5,9,11],versionad:8,vgg11:11,vgg13:11,vgg16:11,vgg19:11,vgg:[1,8],vgg_name:11,vhonavar:5,via:[4,5,8],victim:[2,5,9],victim_model:5,violat:[2,5],vision:[9,11],visual:2,vladu:10,wagner:9,wai:10,wang:10,want:[3,5],weight:[4,5,7,8],weight_decai:[4,5],weinberg:11,when:[2,4,7,8],where:[2,3,5,7,8],whether:[2,4,5,7,8,9,10],which:[3,5,7,8],whole:8,whose:7,widen:8,wijewickrema:10,wiki:8,wikipedia:8,with_bia:[4,5,7],with_relu:[4,5,7],without:[2,4],wong:10,would:[3,5,7],www1:8,www20:5,www:5,x_p:9,x_test:10,x_test_adv:10,x_test_noisi:10,xiangyu:11,xing:10,xingjun:10,xingjunm:10,yaodongyu:10,yerlan:11,yet:5,yisen:10,yopo:[1,8,9,11],yopocnn:[1,8],yopopgd:[1,8],you:[4,7,9,10,11],your:8,your_var:2,zaremba:10,zero:8,zhang:[10,11],zhu:10,zhuang:11,zico:10,zisserman:11,zugner:[3,7]},titles:["Starting to build your robust models with DeepRobust!","deeprobust package","deeprobust.graph package","deeprobust.graph.data package","deeprobust.graph.defense package","deeprobust.graph.global_attack package","deeprobust.graph.rl package","deeprobust.graph.targeted_attack package","deeprobust.image package","deeprobust.image.attack package","deeprobust.image.defense package","deeprobust.image.netmodels package","deeprobust"],titleterms:{adv_train:4,attack:9,attacked_data:3,base_attack:[5,7,9],base_defens:10,black_box:2,bpda:9,build:0,cnn:11,cnn_multilay:11,config:8,content:[1,2,3,4,5,6,7,8,9,10,11],data:3,dataset:3,deepfool:9,deeprobust:[0,1,2,3,4,5,6,7,8,9,10,11,12],defens:[4,10],densenet:11,dice:5,env:6,evaluation_attack:8,fast:10,fga:7,fgsm:9,fgsmtrain:10,gcn:4,gcn_preprocess:4,global_attack:5,graph:[2,3,4,5,6,7],ig_attack:7,imag:[8,9,10,11],indic:0,l2_attack:9,lbfg:9,lidclassifi:10,mettack:5,model:0,modul:[1,2,3,4,5,6,7,8,9,10,11],nattack:9,netmodel:11,nettack:7,nipa:5,nipa_config:6,nipa_env:6,nipa_nstep_replay_mem:6,nipa_q_net_nod:6,nstep_replay_mem:6,onepixel:9,optim:8,packag:[1,2,3,4,5,6,7,8,9,10,11],pgd:[4,9],pgdtrain:10,preact_resnet:11,prognn:4,q_net_nod:6,r_gcn:4,random:5,refer:11,resnet:11,rl_s2v:7,rl_s2v_config:6,rl_s2v_env:6,rnd:7,robust:0,start:0,submodul:[2,3,4,5,6,7,8,9,10,11],subpackag:[1,2,8],tabl:0,targeted_attack:7,therencod:10,topology_attack:5,trade:10,train_model:11,train_resnet:11,univers:9,util:[2,8],vgg:11,yopo:10,yopocnn:11,yopopgd:9,your:0}})