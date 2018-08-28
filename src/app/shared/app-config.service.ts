export class AppConfigService {
    constants = {
        baseUrl: 'http://tatdemo.cloudapp.net:81/DataObjectServer/data/do/',
        martId: '1ee50383-4cbd-41af-a9aa-b87c87f6b294',
        token: 'c5ca273b-bbd6-4ed6-995e-f01d76c2ca15'
    };
    descPopUp = {
        'Filters': [
            { "model_filters_time_dim": "Subset original data based on date\/time variables" },
            { "model_filters_non_time_dim": "Subset original data based on non date\/time variables" }
        ],
        'Sampling': [
            { "model_sampling_criteria": "Sampling method emloyed based on factors such as accuracy requirements,nature of frame and level of detailed analysis" },
            { "model_sampling_stratification_criteria": "Factor based on which data has been sorted into distinct groups\/layers" },
            { "model_sampling_replacement_criteria": "Whether the process of sampling was performed  with or without the replacement of the sampled data(Incase of replacement , sampled data is put back to the original dataset)" },
            { "model_sampling_training_sample": "Data on which the model is initially fitted based on model parameters" },
            { "model_sampling_testing_sample": "Data on which the fitted model is used to predict responses" }
        ],
        'Parameters': [
            { "model_parameters_kfold_valid_parameter": "Number of groups into which dataset needs to be split for the purpose of validating the model" },
            { "model_parameters_family": "The distribution of the dataset" },
            { "model_parameters_no_tress": "Number of trees grown" },
            { "model_parameters_mtry": "Number of variables selected at each split" },
            { "model_parameters_node_size": "Minimum size of terminal nodes. Setting this number larger causes smaller trees to be grown (and thus take less time)." }
        ],
        'Output': [
            { "model_output_importance": "Indicate whether importance of field be written as output" },
            { "model_output_fractions": "Indicate whether output be expressed as fraction or categorical" }
        ]
    };
}
