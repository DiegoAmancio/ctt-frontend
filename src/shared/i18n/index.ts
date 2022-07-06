import { PT_BR, EN_US } from '../constants'
import { categories } from './categories'
import { coins } from './coins'
import { paperType } from './paperType'
import { status } from './status'

export const i18n = {
  [PT_BR]: {
    ...categories[PT_BR],
    ...paperType[PT_BR],
    ...coins[PT_BR],
    ...status[PT_BR],
    updatedUserVolume: 'Aquisição atualizada',
    errorToUpdateUserVolume: 'Erro ao atualizar a aquisição',
    updateUserVolume: 'Atualizar aquisição',
    notAdquired: 'Não adquirido',
    notRegistered: 'Não informado',
    errorToGetVolumes: 'Erro ao carregar os volumes',
    japaneseComicBook: 'Mangá',
    removeVolume: 'Remover volume',
    deleteVolumeMessage: 'Volume removido da coleção',
    errorDeleteVolumeMessage: 'Erro ao deletar o volume da coleção',
    sucessAddVolumeMessage: 'Volume adicionado a coleção',
    publication: 'Checklist',
    erroAddVolumeMessage: 'Erro ao adicionar o volume',
    warning: 'Aviso',
    priceInvalidMessage: 'Coloque um valor válido da compra',
    purchasedDateInvalidMessage: 'A data máxima permitida é hoje',
    purchasedPrice: 'Valor da compra',
    purchasedDate: 'Data de aquisição',
    edition: 'Edição',
    type: 'Tipo',
    status: 'Status',
    publisher: 'Editora',
    totalVolumes: 'Total de volumes',
    format: 'Formato',
    author: 'Autor',
    ageRange: 'Faixa Etária',
    bagShape: 'Formato saquinho',
    categories: 'Categorias',
    language: 'Linguagem',
    country: 'País ',
    synopsis: 'Sinopse',
    paperType: 'Tipo de papel',
    acquisitionDifficulty: 'Dificuldade de aquisição (Sua nota)',
    acquisitionDifficultyAverage: 'Dificuldade de aquisição (público)',
    price: 'Preço',
    releaseDate: 'Data de publicação',
    observations: 'Observações',
    createdAt: 'Cadastrado',
    updatedAt: 'Atualizado',
    statusComplete: 'Completo',
    details: 'Detalhes',
    volumes: 'Volumes',
    authorInformationLabel: 'Informações do autor',
    literaryWorkInformationLabel: 'Informações da obra literária',
    colletion: 'Coleção',
    addToCollection: 'Adicionar a coleção',
    dimensions: 'Dimensões',
    name: 'Nome',
    gifts: 'Brindes',
    volume: 'Volume',
    number: 'Número',
    checkList: 'Checklist',
    numberOfPages: 'Número de páginas',
    titles: [
      { label: 'Inicio', link: '/' },
      {
        label: 'Sua coleção',
        link: '/collection'
      },
      {
        label: 'Obras literárias',
        link: '/literaryWorks'
      }
    ],
    literaryWork: 'Obras literárias',
    addVolumes: 'Volumes adicionados',
    literaryWorksAdd: 'Obras Adicionadas',
    search: 'Buscar',
    signIn: 'Entrar',
    cttVersion: 'Versão',
    buttonScrollVersion: 'Voltar para o topo',
    coverPrice: 'Preço de capa',
    totalLiteraryWorks: 'Total de obras',
    collectionValue: 'Valor da coleção',
    completeLiteraryWorks: 'Obras completas',
    memberSince: 'Membro desde',
    paperBack: 'Número de páginas',
    illustratorBy: 'Arte',
    writterBy: 'Roteiro por',
    ilustratorBy: 'Ilustrado por',
    JapaneseComicBook: 'Mangá',
    comicBook: 'História em quadrinhos',
    book: 'Livro',
    deluxe: 'Luxo',
    registeredBy: 'Cadastrado por',
    updatedBy: 'Atualizado por',
    startOfPublication: 'inicio da publicação',
    endOfPublication: 'fim da publicação',
    releaseFrequency: 'periodicidade',
    monthly: 'mensal',
    bimonthly: 'bimestral',
    quarterly: 'trimestral',
    semiannual: 'semestral',
    originalPublisher: 'Editora original',
    ptBR: 'português brasileiro',
    enUs: 'inglês norte americano'
  },
  [EN_US]: {
    ...categories[EN_US],
    ...paperType[EN_US],
    ...coins[EN_US],
    ...status[EN_US],
    errorToUpdateUserVolume: 'Error to update aquisition',
    updatedUserVolume: 'Aquisition updated',
    updateUserVolume: 'Update aquisition',
    notAdquired: 'Not Adquired',
    japaneseComicBook: 'Mangá',
    notRegistered: 'Not registered',
    errorToGetVolumes: 'Error To get volumes',
    removeVolume: 'Remove Volume',
    deleteVolumeMessage: 'Volume removed from collection',
    errorDeleteVolumeMessage: 'Error to remove volume from collection',
    sucessAddVolumeMessage: 'Volume added from collection',
    erroAddVolumeMessage: 'Error to add volume',
    publication: 'Checklist',
    warning: 'Warning',
    purchasedDateInvalidMessage: 'The maximum date allowed is today',
    priceInvalidMessage: 'Put valid price',
    purchasedPrice: 'Purchased Price',
    purchasedDate: 'Purchased Date',
    edition: 'Edition',
    type: 'Type',
    status: 'Status',
    publisher: 'Publisher',
    totalVolumes: 'Total volumes',
    format: 'Format',
    author: 'Author',
    ageRange: 'Age range',
    bagShape: 'Bag shape',
    categories: 'Categories',
    language: 'Language',
    country: 'Country',
    synopsis: 'Synopsis',
    paperType: 'Paper Type',
    acquisitionDifficulty: 'Acquisition Difficulty (Your Rating)',
    acquisitionDifficultyAverage: 'Acquisition Difficulty (public)',
    price: 'Price',
    releaseDate: 'Release Date',
    observations: 'Observations',
    createdAt: 'Created At',
    updatedAt: 'Updated At',
    statusComplete: 'Complete',
    details: 'Details',
    volumes: 'Volumes',
    authorInformationLabel: 'Author Information',
    literaryWorkInformationLabel: 'Literary Work Information',
    colletion: 'Colletion',
    literaryWork: 'Literary Works',
    addToCollection: 'Add to collection',
    dimensions: 'Dimensions',
    name: 'Name',
    volume: 'Volume',
    gifts: 'Gifts',
    number: 'Number',
    checkList: 'Check list',
    numberOfPages: 'Number of pages',
    titles: [
      { label: 'home', link: '/' },
      {
        label: 'your Collection',
        link: '/collection'
      },
      {
        label: 'literary works',
        link: '/literaryWorks'
      }
    ],
    addVolumes: 'Added Volumes',
    literaryWorksAdd: 'Added literary works',
    search: 'Search',
    signIn: 'Sign In',
    cttVersion: 'Version',
    buttonScrollVersion: 'Back to top',
    coverPrice: 'Cover Price',
    totalLiteraryWorks: 'Total Literary Work',
    collectionValue: 'Collection Value',
    completeLiteraryWorks: 'Complete Literary Work',
    memberSince: 'Member Since',
    paperBack: 'Paper Back',
    illustratorBy: 'Art',
    writterBy: 'Script by',
    ilustratorBy: 'Ilustrator By',
    JapaneseComicBook: 'Japanese comic book',
    comicBook: 'Comics',
    book: 'Book',
    deluxe: 'Deluxe',
    registeredBy: 'Registered by',
    updatedBy: 'Updated by',
    startOfPublication: 'start of publication',
    endOfPublication: 'end of publication',
    releaseFrequency: 'release frequency',
    monthly: 'monthly',
    bimonthly: 'bimonthly',
    quarterly: 'quarterly',
    semiannual: 'semiannual',
    originalPublisher: 'Original Publisher',
    ptBR: 'Brazilian potuguese',
    enUs: 'North american english'
  }
}
