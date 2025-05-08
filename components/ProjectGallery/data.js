// components/ProjectGallery/data.js

export const projects = [
  {
    id: 1,
    title: "Dashboard Comercial com Power BI",
    shortDescription: "Dashboard completo de análise de vendas com foco em insights visuais e decisão estratégica.",
    longDescription: `Este projeto desenvolve um dashboard interativo em Power BI para análise de vendas comerciais.
  
  O dashboard inclui:
  - KPIs de vendas por categoria e fabricante;
  - Análise dos principais influenciadores de vendas;
  - Análise geográfica da performance de vendedores;
  - Storytelling de destaque para insights estratégicos;
  - Navegação organizada por índice temático.
  
  Ferramentas como gráficos Sankey, pie charts, histogramas e mapas geográficos são utilizados para transformar dados brutos em visualizações claras e orientadas para decisão. O objetivo final é fornecer uma plataforma visual de apoio à tomada de decisão comercial estratégica.`,
    technologies: ["Power BI", "DAX", "Storytelling", "Modelagem de Dados", "Geovisualização"],
    images: [
      {
        src: "/images/dashboard-pbi-indice.png",
        caption: "🧭 Índice navegável e organizado por temas de análise."
      },
      {
        src: "/images/dashboard-pbi-narrativa.png",
        caption: "📖 Narrativa inteligente destacando fabricantes líderes e insights de mercado."
      },
      {
        src: "/images/dashboard-pbi-influenciadores.png",
        caption: "🎯 Gráfico de influenciadores apontando variáveis que impactam as vendas."
      },
      {
        src: "/images/dashboard-pbi-categoria-loja.png",
        caption: "🛒 Gráfico Sankey demonstrando a relação entre categorias de produto e lojas."
      },
      {
        src: "/images/dashboard-pbi-mapa.png",
        caption: "🗺️ Mapa interativo exibindo performance de vendas por estado e vendedor."
      }
    ]
  },
  
  {
    id: 2,
    title: "Detecção de Anomalias em Transações Ethereum",
    shortDescription:
      "Machine Learning para identificar comportamentos suspeitos em dados da blockchain Ethereum.",
    longDescription:
      "Este projeto aplica técnicas de Análise Exploratória de Dados (EDA) e algoritmos de Machine Learning não supervisionado (Isolation Forest e DBSCAN) para detectar comportamentos suspeitos em transações da blockchain Ethereum.\n\nRealizamos análise de outliers, definição de baseline com threshold manual, e avaliação de modelos supervisionados com métricas de classificação.\n\nResultados: Isolation Forest apresentou recall de 97% para fraudes e acurácia de 97%; o baseline (threshold) foi 100% preciso com recall de 81%; o DBSCAN detectou muitas anomalias mas com alto índice de falsos positivos (recall de apenas 5%).\n\nO projeto é aplicável em contextos de compliance, auditoria, cibersegurança e prevenção à lavagem de dinheiro, mostrando a relevância da modelagem para o setor financeiro descentralizado.",
    technologies: [
      "Python",
      "EDA",
      "Machine Learning",
      "Isolation Forest",
      "DBSCAN",
      "Visualização de Dados",
      "Blockchain",
      "Compliance"
    ],
    images: [
      {
        src: "/images/anomalias-corr.png",
        caption: "🔍 Heatmap de correlação entre variáveis relevantes das transações"
      },
      {
        src: "/images/anomalias-sent-dist.png",
        caption: "📊 Distribuição da variável 'Sent tnx' revela comportamento assimétrico e outliers"
      },
      {
        src: "/images/anomalias-erc20-boxplot.png",
        caption: "📦 Boxplot evidencia valores extremos em transações com tokens ERC20"
      },
      {
        src: "/images/anomalias-threshold.png",
        caption: "🚩 Aplicação de threshold manual como baseline para flag de anomalias"
      },
      {
        src: "/images/anomalias-matriz-baseline.png",
        caption: "📈 Matriz de confusão para avaliação do método baseline"
      },
      {
        src: "/images/anomalias-isolation-scatter.png",
        caption: "🌲 Detecção de anomalias com Isolation Forest: pontos vermelhos indicam suspeitas"
      },
      {
        src: "/images/anomalias-matriz-isolation.png",
        caption: "📊 Avaliação do Isolation Forest com alta acurácia e recall para fraudes"
      },
      {
        src: "/images/anomalias-dbscan-scatter.png",
        caption: "🧬 DBSCAN aplicando clusterização para detectar transações fora do padrão"
      },
      {
        src: "/images/anomalias-matriz-dbscan.png",
        caption: "⚠️ DBSCAN apresenta recall baixo e alta taxa de falsos positivos"
      }
    ]
  },

 {
  id: 3,
  title: "Dashboard de Previsão de Mortalidade Hospitalar",
  shortDescription:
    "Dashboard com análise exploratória e previsão de mortalidade hospitalar utilizando Random Forest.",
  longDescription:
    "Este projeto consiste em um dashboard interativo desenvolvido com Streamlit que realiza análise exploratória e previsão de mortalidade hospitalar com base em dados reais de internações e óbitos.\n\nFoi aplicada análise estatística de variáveis como idade, gênero, tempo de internação, poluentes e índice AQI. O modelo Random Forest foi treinado para prever a mortalidade hospitalar, alcançando acurácia de 99%.\n\nA interface permite filtragem dinâmica dos dados e visualização dos resultados com gráficos de barras, boxplots, distribuições e mapas de calor.\n\nEste trabalho demonstra como ciência de dados pode ser aplicada para auxiliar na tomada de decisões clínicas e políticas de saúde pública.\n\n🔍 Conclusão:\nA combinação entre variáveis ambientais (como poluentes e AQI), características demográficas e clínicas se mostrou relevante na análise de mortalidade hospitalar. O modelo Random Forest obteve desempenho excelente, revelando o potencial de modelos de aprendizado de máquina em contextos hospitalares. Além disso, a aplicação de visualizações interativas contribui para a interpretação dos dados por profissionais da saúde e gestores públicos.",
  technologies: [
    "Python",
    "Streamlit",
    "Scikit-learn",
    "Pandas",
    "Seaborn",
    "Matplotlib",
    "Random Forest",
    "Ciência de Dados"
  ],
  images: [
    {
      src: "/images/mortalidade-area-boxplot.png",
      caption: "📦 Mortalidade (MRD) por tipo de área"
    },
    {
      src: "/images/mortalidade-distribuicao-idade.png",
      caption: "📊 Distribuição de idade dos pacientes de mortalidade"
    },
    {
      src: "/images/mortalidade-correlacao-poluentes.png",
      caption: "🔬 Matriz de correlação entre poluentes atmosféricos"
    },
    {
      src: "/images/mortalidade-distribuicao-aqi.png",
      caption: "🌫️ Distribuição do índice de qualidade do ar (AQI)"
    },
    {
      src: "/images/mortalidade-pm25-aqi-scatter.png",
      caption: "📈 Relação entre PM2.5 e AQI"
    },
    {
      src: "/images/mortalidade-tempmax-pm25.png",
      caption: "🌡️ Relação entre temperatura máxima e PM2.5"
    },
    {
      src: "/images/mortalidade-rf-treino-avaliacao.png",
      caption: "🧠 Treinamento e avaliação do modelo Random Forest"
    },
    {
      src: "/images/mortalidade-dashboard-distribuicao.png",
      caption: "📊 Dashboard de mortalidade com filtros por idade e gênero"
    },
    {
      src: "/images/mortalidade-dashboard-metricas.png",
      caption: "📈 Métricas e desempenho do modelo de previsão"
    },
    {
      src: "/images/mortalidade-tabela-admissoes.png",
      caption: "📝 Tabela de admissões hospitalares filtradas"
    }
  ]
}


  
];
