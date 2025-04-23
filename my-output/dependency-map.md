# Dependency Map

```mermaid
flowchart LR
  %% Style definitions
  classDef component fill:#e1f5fe,stroke:#0288d1,color:#01579b
  classDef context fill:#fff9c4,stroke:#fbc02d,color:#f57f17
  classDef object fill:#e8f5e9,stroke:#43a047,color:#1b5e20
  classDef array fill:#f3e5f5,stroke:#8e24aa,color:#4a148c
  classDef map fill:#ffebee,stroke:#e53935,color:#b71c1c
  classDef multiConsumer fill:#ede7f6,stroke:#673ab7,color:#311b92,stroke-width:3px

  subgraph Components
  authcontext["Component: " + "["AuthContext"]:::component
  cartcontext["Component: " + "["CartContext"]:::component
  datacontext["Component: " + "["DataContext"]:::component
  dealscontext["Component: " + "["DealsContext"]:::component
  backgroundfetcher["Component: " + "["BackgroundFetcher"]:::component
  browseviewwrapper["Component: " + "["BrowseViewWrapper"]:::component
  categoryselectionmain["Component: " + "["CategorySelectionMain"]:::component
  conditionalhero["Component: " + "["ConditionalHero"]:::component
  header["Component: " + "["Header"]:::component
  headersearch["Component: " + "["HeaderSearch"]:::component
  hero["Component: " + "["Hero"]:::component
  productbadges["Component: " + "["ProductBadges"]:::component
  productbreadcrumb["Component: " + "["ProductBreadcrumb"]:::component
  productcard["Component: " + "["ProductCard"]:::component
  productpagecontent["Component: " + "["ProductPageContent"]:::component
  productquickview["Component: " + "["ProductQuickView"]:::component
  productslistmain["Component: " + "["ProductsListMain"]:::component
  saleribbon["Component: " + "["SaleRibbon"]:::component
  shoppingcart["Component: " + "["ShoppingCart"]:::component
  singleproductview["Component: " + "["SingleProductView"]:::component
  userdashboard["Component: " + "["UserDashboard"]:::component
  layout["Component: " + "["layout"]:::component
  not_found["Component: " + "["not-found"]:::component
  page["Component: " + "["page"]:::component
  providers["Component: " + "["providers"]:::component
  orderhistory["Component: " + "["OrderHistory"]:::component
  personalinfo["Component: " + "["PersonalInfo"]:::component
  authbutton["Component: " + "["AuthButton"]:::component
  userauthmodal["Component: " + "["UserAuthModal"]:::component
  confirmationmodal["Component: " + "["ConfirmationModal"]:::component
  emptycartnotification["Component: " + "["EmptyCartNotification"]:::component
  helpmodal["Component: " + "["HelpModal"]:::component
  menu["Component: " + "["Menu"]:::component
  productsearchmanager["Component: " + "["ProductSearchManager"]:::component
  searchresults["Component: " + "["SearchResults"]:::component
  sharemodal["Component: " + "["ShareModal"]:::component
  shineeffect["Component: " + "["ShineEffect"]:::component
  swipetoaction["Component: " + "["SwipeToAction"]:::component
  notemodal["Component: " + "["noteModal"]:::component
  browseviewmain["Component: " + "["BrowseViewMain"]:::component
  categorynavigationbar["Component: " + "["CategoryNavigationBar"]:::component
  productcardwrapper["Component: " + "["ProductCardWrapper"]:::component
  productsection["Component: " + "["ProductSection"]:::component
  dealsdebugpanel["Component: " + "["DealsDebugPanel"]:::component
  checkout["Component: " + "["Checkout"]:::component
  checkoutmodal["Component: " + "["CheckoutModal"]:::component
  addressmodal["Component: " + "["AddressModal"]:::component
  cartbutton["Component: " + "["CartButton"]:::component
  cartcheck["Component: " + "["CartCheck"]:::component
  cartstatepersistencehandler["Component: " + "["CartStatePersistenceHandler"]:::component
  devtools["Component: " + "["DevTools"]:::component
  end

  subgraph Contexts
  unnamedcontext["["Context: UnnamedContext
(0 consumers)"]:::context
  end

  subgraph MultiConsumedProps
  prop_error["["Prop: Error
(2 consumers)"]:::multiConsumer
  prop_image["["Prop: Image
(13 consumers)"]:::multiConsumer
  prop_conditionalhero["["Prop: ConditionalHero
(2 consumers)"]:::multiConsumer
  prop_hero["["Prop: Hero
(2 consumers)"]:::multiConsumer
  prop_chevronleft["["Prop: ChevronLeft
(3 consumers)"]:::multiConsumer
  prop_productsearchmanager["["Prop: ProductSearchManager
(2 consumers)"]:::multiConsumer
  prop_menu["["Prop: Menu
(2 consumers)"]:::multiConsumer
  prop_link["["Prop: Link
(7 consumers)"]:::multiConsumer
  prop_saleribbon["["Prop: SaleRibbon
(2 consumers)"]:::multiConsumer
  prop_productpagecontent["["Prop: ProductPageContent
(2 consumers)"]:::multiConsumer
  prop_productquickview["["Prop: ProductQuickView
(3 consumers)"]:::multiConsumer
  prop_productbadges["["Prop: ProductBadges
(2 consumers)"]:::multiConsumer
  prop_productlist["["Prop: ProductList
(3 consumers)"]:::multiConsumer
  prop_productcard["["Prop: ProductCard
(2 consumers)"]:::multiConsumer
  prop_swipetoaction["["Prop: SwipeToAction
(4 consumers)"]:::multiConsumer
  prop_sharemodal["["Prop: ShareModal
(3 consumers)"]:::multiConsumer
  prop_generatemetadata["["Prop: generateMetadata
(4 consumers)"]:::multiConsumer
  prop_userauthmodal["["Prop: UserAuthModal
(4 consumers)"]:::multiConsumer
  prop_ricloseline["["Prop: RiCloseLine
(1 consumers)"]:::multiConsumer
  prop_helpmodal["["Prop: HelpModal
(2 consumers)"]:::multiConsumer
  prop_addressmodal["["Prop: AddressModal
(3 consumers)"]:::multiConsumer
  prop_shineeffect["["Prop: ShineEffect
(1 consumers)"]:::multiConsumer
  prop_notemodal["["Prop: NoteModal
(2 consumers)"]:::multiConsumer
  prop_categorynavigation["["Prop: CategoryNavigation
(2 consumers)"]:::multiConsumer
  prop_productsection["["Prop: ProductSection
(2 consumers)"]:::multiConsumer
  prop_productcardwrapper["["Prop: ProductCardWrapper
(2 consumers)"]:::multiConsumer
  prop_checkout["["Prop: Checkout
(2 consumers)"]:::multiConsumer
  prop_checkoutmodal["["Prop: CheckoutModal
(2 consumers)"]:::multiConsumer
  prop_formatcacheage["["Prop: formatCacheAge
(3 consumers)"]:::multiConsumer
  prop_formatcachetime["["Prop: formatCacheTime
(2 consumers)"]:::multiConsumer
  prop_formathumantime["["Prop: formatHumanTime
(2 consumers)"]:::multiConsumer
  prop_get["["Prop: GET
(9 consumers)"]:::multiConsumer
  prop_post["["Prop: POST
(6 consumers)"]:::multiConsumer
  prop_put["["Prop: PUT
(3 consumers)"]:::multiConsumer
  end

  %% Import relationships
  middleware --> middleware
  routing --> middleware
  next --> next_config
  plugin --> next_config
  tailwindcss --> tailwind_config
  react --> authcontext
  useuser --> authcontext
  logger --> authcontext
  react --> cartcontext
  global --> cartcontext
  hooks --> cartcontext
  confirmationmodal --> cartcontext
  emptycartnotification --> cartcontext
  navigation --> cartcontext
  dealscontext --> cartcontext
  deal --> cartcontext
  react --> datacontext
  navigation --> datacontext
  global --> datacontext
  loading --> datacontext
  logger --> datacontext
  hooks --> datacontext
  error --> datacontext
  react --> dealscontext
  deal --> dealscontext
  server --> request
  routing --> request
  routing --> routing
  navigation --> routing
  react --> backgroundfetcher
  navigation --> backgroundfetcher
  swr --> backgroundfetcher
  global --> backgroundfetcher
  fetchers --> backgroundfetcher
  logger --> backgroundfetcher
  providers --> backgroundfetcher
  constants --> backgroundfetcher
  react --> browseviewwrapper
  browseviewmain --> browseviewwrapper
  providers --> browseviewwrapper
  react --> categoryselectionmain
  image --> categoryselectionmain
  navigation --> categoryselectionmain
  datacontext --> categoryselectionmain
  react --> conditionalhero
  navigation --> conditionalhero
  hero --> conditionalhero
  global --> conditionalhero
  react --> header
  navigation --> header
  lucide_react --> header
  menu --> header
  productsearchmanager --> header
  react --> headersearch
  navigation --> headersearch
  next_intl --> headersearch
  global --> headersearch
  index --> headersearch
  image --> headersearch
  react --> hero
  image --> hero
  link --> hero
  global --> hero
  navigation --> hero
  react --> productbadges
  image --> productbadges
  global --> productbadges
  navigation --> productbadges
  react --> productbreadcrumb
  link --> productbreadcrumb
  navigation --> productbreadcrumb
  react --> productcard
  image --> productcard
  cartcontext --> productcard
  global --> productcard
  navigation --> productcard
  saleribbon --> productcard
  he --> productcard
  ar --> productcard
  react --> productpagecontent
  singleproductview --> productpagecontent
  react --> productquickview
  image --> productquickview
  cartcontext --> productquickview
  navigation --> productquickview
  global --> productquickview
  index --> productquickview
  productbadges --> productquickview
  react --> productslistmain
  productcard --> productslistmain
  global --> productslistmain
  index --> productslistmain
  datacontext --> productslistmain
  productquickview --> productslistmain
  lucide_react --> productslistmain
  usedragscroll --> productslistmain
  authcontext --> productslistmain
  navigation --> productslistmain
  useorders --> productslistmain
  react --> saleribbon
  navigation --> saleribbon
  global --> saleribbon
  react --> shoppingcart
  image --> shoppingcart
  link --> shoppingcart
  cartcontext --> shoppingcart
  swipetoaction --> shoppingcart
  navigation --> shoppingcart
  react --> singleproductview
  image --> singleproductview
  cartcontext --> singleproductview
  navigation --> singleproductview
  global --> singleproductview
  next_intl --> singleproductview
  index --> singleproductview
  productbadges --> singleproductview
  sharemodal --> singleproductview
  saleribbon --> singleproductview
  useproduct --> singleproductview
  loading --> singleproductview
  productbreadcrumb --> singleproductview
  react --> userdashboard
  navigation --> userdashboard
  next_intl --> userdashboard
  userprofile --> userdashboard
  authcontext --> userdashboard
  logger --> userdashboard
  global --> siteconfig
  messages --> orderconfirmation
  next_intl --> layout
  server --> layout
  navigation --> layout
  routing --> layout
  globals --> layout
  cartcontext --> layout
  authcontext --> layout
  cartbutton --> layout
  heromessages --> layout
  react --> layout
  datacontext --> layout
  cartstatepersistencehandler --> layout
  script --> layout
  next --> layout
  siteconfig --> layout
  logger --> layout
  providers --> layout
  header --> layout
  conditionalhero --> layout
  devtools --> layout
  dealsdebugpanel --> layout
  react --> not_found
  navigation --> not_found
  categoryselectionmain --> page
  productslistmain --> page
  next_intl --> page
  server --> page
  backgroundfetcher --> page
  next --> page
  siteconfig --> page
  routing --> page
  react --> providers
  swr --> providers
  logger --> providers
  constants --> providers
  dealscontext --> providers
  react --> orderhistory
  next_intl --> orderhistory
  navigation --> orderhistory
  cartcontext --> orderhistory
  checkout --> orderhistory
  useorders --> orderhistory
  react --> personalinfo
  navigation --> personalinfo
  next_intl --> personalinfo
  user --> personalinfo
  react --> authbutton
  ri --> authbutton
  userauthmodal --> authbutton
  authcontext --> authbutton
  react --> userauthmodal
  ri --> userauthmodal
  navigation --> userauthmodal
  global --> userauthmodal
  react --> confirmationmodal
  global --> confirmationmodal
  swipetoaction --> confirmationmodal
  navigation --> confirmationmodal
  react --> emptycartnotification
  global --> emptycartnotification
  next_intl --> emptycartnotification
  react --> helpmodal
  react --> menu
  image --> menu
  link --> menu
  lucide_react --> menu
  navigation --> menu
  addressmodal --> menu
  useuser --> menu
  helpmodal --> menu
  userauthmodal --> menu
  useflasheffect --> menu
  sharemodal --> menu
  react --> productsearchmanager
  image --> productsearchmanager
  navigation --> productsearchmanager
  datacontext --> productsearchmanager
  global --> productsearchmanager
  searchresults --> productsearchmanager
  react --> searchresults
  image --> searchresults
  global --> searchresults
  index --> searchresults
  cartcontext --> searchresults
  useflasheffect --> searchresults
  react --> sharemodal
  react --> shineeffect
  global --> shineeffect
  react --> swipetoaction
  global --> swipetoaction
  navigation --> swipetoaction
  he --> swipetoaction
  ar --> swipetoaction
  shineeffect --> swipetoaction
  react --> notemodal
  global --> notemodal
  react --> browseviewmain
  navigation --> browseviewmain
  global --> browseviewmain
  hooks --> browseviewmain
  categorynavigationbar --> browseviewmain
  productsection --> browseviewmain
  productquickview --> browseviewmain
  react --> categorynavigationbar
  global --> categorynavigationbar
  navigation --> categorynavigationbar
  react --> productcardwrapper
  productcard --> productcardwrapper
  global --> productcardwrapper
  index --> productcardwrapper
  react --> productsection
  global --> productsection
  productcardwrapper --> productsection
  react_intersection_observer --> productsection
  react --> dealsdebugpanel
  dealscontext --> dealsdebugpanel
  cartcontext --> dealsdebugpanel
  deal --> dealsdebugpanel
  react --> checkout
  navigation --> checkout
  cartcontext --> checkout
  checkout --> checkout
  image --> checkout
  link --> checkout
  useuser --> checkout
  react --> checkoutmodal
  navigation --> checkoutmodal
  navigation --> checkoutmodal
  checkout --> checkoutmodal
  checkout --> checkoutmodal
  react --> addressmodal
  user --> addressmodal
  cartcontext --> cartbutton
  navigation --> cartbutton
  react --> cartbutton
  navigation --> cartbutton
  swipetoaction --> cartbutton
  checkoutmodal --> cartbutton
  userauthmodal --> cartbutton
  useuser --> cartbutton
  user_api --> cartbutton
  he --> cartbutton
  ar --> cartbutton
  react --> cartcheck
  image --> cartcheck
  link --> cartcheck
  cartcontext --> cartcheck
  swipetoaction --> cartcheck
  navigation --> cartcheck
  userauthmodal --> cartcheck
  addressmodal --> cartcheck
  useuser --> cartcheck
  notemodal --> cartcheck
  cartcontext --> cartstatepersistencehandler
  navigation --> cartstatepersistencehandler
  react --> cartstatepersistencehandler
  react --> emptycartnotification
  global --> emptycartnotification
  navigation --> emptycartnotification
  react --> devtools
  datacontext --> devtools
  swr --> swr
  cache --> swr
  swr --> createentityhook
  global --> createentityhook
  fetchers --> createentityhook
  logger --> createentityhook
  constants --> createentityhook
  react --> usecartdiscounts
  cartitem --> usecartdiscounts
  deal --> usecartdiscounts
  global --> usecategories
  fetchers --> usecategories
  createentityhook --> usecategories
  react --> usedealsdebug
  dealscontext --> usedealsdebug
  react --> usedragscroll
  react --> useflasheffect
  react --> usehydration
  swr --> useorders
  fetchers --> useorders
  constants --> useorders
  global --> useorders
  swr --> useproduct
  global --> useproduct
  fetchers --> useproduct
  constants --> useproduct
  logger --> useproduct
  global --> useproducts
  fetchers --> useproducts
  createentityhook --> useproducts
  swr --> useuser
  global --> useuser
  fetchers --> useuser
  constants --> useuser
  logger --> useuser
  deal --> cartitem
  global --> cartitem
  global --> auth
  global --> ui
  logger --> cache_diagnostic
  cache_metrics --> cache_diagnostic
  cache --> index
  product --> index
  browseviewwrapper --> page
  react --> page
  loading --> page
  next --> page
  server --> page
  siteconfig --> page
  routing --> page
  backgroundfetcher --> page
  react --> page
  cartcheck --> page
  productslistmain --> page
  next_intl --> page
  react --> page
  navigation --> page
  link --> page
  orderconfirmation --> page
  react --> page
  navigation --> page
  userdashboard --> page
  next_intl --> page
  server --> route
  cache_metrics --> route
  redis --> route
  logger --> route
  os --> route
  server --> route
  wp_auth --> route
  index --> route
  server --> route
  wp_auth --> route
  logger --> fetchers
  global --> fetchers
  global --> index
  constants --> index
  swr --> swr_config
  constants --> swr_config
  global --> user_api
  logger --> user_api
  wp_auth --> wp_api
  global --> wp_api
  logger --> wp_api
  server --> auth
  server --> index
  buffer --> wp_auth
  constants --> index
  ioredis --> redis
  logger --> redis
  cache --> redis
  memory_cache --> redis
  cache_diagnostic --> redis
  global --> wp_cache
  index --> wp_cache
  constants --> wp_cache
  redis --> wp_cache
  logger --> wp_cache
  wp_api --> wp_cache
  route --> wp_cache
  global --> index
  logger --> cache_metrics
  perf_hooks --> cache_metrics
  global --> index
  deal --> index
  react --> page
  server --> page
  next --> page
  productpagecontent --> page
  siteconfig --> page
  wp_cache --> page
  global --> page
  server --> route
  global --> route
  wp_cache --> route
  index --> route
  constants --> route
  server --> route
  global --> route
  wp_cache --> route
  index --> route
  constants --> route
  server --> route
  wp_cache --> route
  redis --> route
  server --> route
  cache_metrics --> route
  logger --> route
  server --> route
  wp_auth --> route
  server --> route
  wp_auth --> route
  index --> route
  server --> route
  wp_auth --> route
  server --> route
  auth --> route
  server --> route
  wp_auth --> route
  auth --> route
  constants --> route
  redis --> route
  logger --> route
  cache_keys --> route
  cache_diagnostic --> route
  uuid --> route
  server --> route
  wp_auth --> route
  server --> route
  wp_auth --> route
  server --> route
  global --> route
  wp_cache --> route
  index --> route
  constants --> route
  deals --> route
  server --> route
  cache_metrics --> route
  logger --> route
  server --> route
  wp_auth --> route
  %% Context relationships
  authcontext -->|creates| unnamedcontext
  cartcontext -->|creates| unnamedcontext
  datacontext -->|creates| unnamedcontext
  dealscontext -->|creates| unnamedcontext
  %% Props relationships
  test_cache -->|props| parsecacheheaders
  test_cache -->|props| formattime
  test_cache -->|props| fetchendpoint
  cartcontext -->|props| confirmationmodal
  cartcontext -->|props| emptycartnotification
  datacontext -->|props| dataprovider
  datacontext -->|props| error
  categoryselectionmain -->|props| image
  conditionalhero -->|props| conditionalhero
  conditionalhero -->|props| hero
  header -->|props| chevronleft
  header -->|props| productsearchmanager
  header -->|props| menu
  hero -->|props| link
  productcard -->|props| getmessages
  productcard -->|props| saleribbon
  productpagecontent -->|props| productpagecontent
  productpagecontent -->|props| singleproductview
  productquickview -->|props| productquickview
  productquickview -->|props| productbadges
  productslistmain -->|props| productlist
  productslistmain -->|props| getrandomproducts
  productslistmain -->|props| productcard
  productslistmain -->|props| chevronright
  shoppingcart -->|props| swipetoaction
  singleproductview -->|props| productbreadcrumb
  singleproductview -->|props| sharemodal
  userdashboard -->|props| personalinfo
  userdashboard -->|props| orderhistory
  layout -->|props| generatemetadata
  layout -->|props| localelayout
  layout -->|props| script
  layout -->|props| nextintlclientprovider
  providers -->|props| swrprovider
  providers -->|props| swrconfig
  providers -->|props| providers
  authbutton -->|props| riuserline
  authbutton -->|props| userauthmodal
  userauthmodal -->|props| ricloseline
  userauthmodal -->|props| riuser3line
  userauthmodal -->|props| riarrowleftsline
  userauthmodal -->|props| rilogoutboxrline
  helpmodal -->|props| helpmodal
  menu -->|props| addressmodal
  productsearchmanager -->|props| searchresults
  swipetoaction -->|props| shineeffect
  notemodal -->|props| notemodal
  browseviewmain -->|props| categorynavigation
  browseviewmain -->|props| productsection
  productcardwrapper -->|props| productcardwrapper
  checkout -->|props| checkout
  checkoutmodal -->|props| checkoutmodal
  createentityhook -->|props| createentityhook
  usedragscroll -->|props| usedragscroll
  useflasheffect -->|props| useflasheffect
  useproduct -->|props| useproduct
  cache_diagnostic -->|props| logcache
  cache_diagnostic -->|props| getlayersymbol
  cache_diagnostic -->|props| getactiontext
  formatting -->|props| formatcacheage
  formatting -->|props| formatcachetime
  formatting -->|props| formathumantime
  formatting -->|props| formatprice
  page -->|props| suspense
  route -->|props| get
  route -->|props| post
  route -->|props| put
  fetchers -->|props| apifetcher
  fetchers -->|props| userfetcher
  fetchers -->|props| productsfetcher
  fetchers -->|props| productfetcher
  fetchers -->|props| categoriesfetcher
  fetchers -->|props| ordersfetcher
  user_api -->|props| iscachevalid
  user_api -->|props| fetchcurrentuser
  wp_api -->|props| wpapifetch
  auth -->|props| isauthenticated
  auth -->|props| setauthheaders
  auth -->|props| clearauthcookies
  index -->|props| safecacheage
  index -->|props| calculatecachepercent
  index -->|props| getcachediagnostics
  index -->|props| addcacheheaders
  index -->|props| adddevelopmentcacheheaders
  redis -->|props| getfromcache
  redis -->|props| setincache
  redis -->|props| deletefromcache
  redis -->|props| getcategorycachekey
  redis -->|props| getproductcachekey
  redis -->|props| getusercachekey
  wp_cache -->|props| transformcategories
  wp_cache -->|props| getcategories
  wp_cache -->|props| getproducts
  wp_cache -->|props| paginateproducts
  wp_cache -->|props| pretransformproducts
  cache_metrics -->|props| setmetricsenabled
  cache_metrics -->|props| trackcacheoperation
  cache_metrics -->|props| maptoobject
  cache_metrics -->|props| withcachemetrics
  page -->|props| page
  route -->|props| delete
  prop_error -.->|used by| datacontext
  prop_error -.->|used by| error
  prop_image -.->|used by| categoryselectionmain
  prop_image -.->|used by| headersearch
  prop_image -.->|used by| hero
  prop_image -.->|used by| productbadges
  prop_image -.->|used by| productcard
  prop_image -.->|used by| productquickview
  prop_image -.->|used by| shoppingcart
  prop_image -.->|used by| singleproductview
  prop_image -.->|used by| menu
  prop_image -.->|used by| productsearchmanager
  prop_image -.->|used by| searchresults
  prop_image -.->|used by| checkout
  prop_image -.->|used by| cartcheck
  prop_conditionalhero -.->|used by| conditionalhero
  prop_conditionalhero -.->|used by| layout
  prop_hero -.->|used by| conditionalhero
  prop_hero -.->|used by| hero
  prop_chevronleft -.->|used by| header
  prop_chevronleft -.->|used by| productslistmain
  prop_chevronleft -.->|used by| menu
  prop_productsearchmanager -.->|used by| header
  prop_productsearchmanager -.->|used by| productsearchmanager
  prop_menu -.->|used by| header
  prop_menu -.->|used by| menu
  prop_link -.->|used by| hero
  prop_link -.->|used by| productbreadcrumb
  prop_link -.->|used by| shoppingcart
  prop_link -.->|used by| menu
  prop_link -.->|used by| checkout
  prop_link -.->|used by| cartcheck
  prop_link -.->|used by| page
  prop_saleribbon -.->|used by| productcard
  prop_saleribbon -.->|used by| singleproductview
  prop_productpagecontent -.->|used by| productpagecontent
  prop_productpagecontent -.->|used by| page
  prop_productquickview -.->|used by| productquickview
  prop_productquickview -.->|used by| productslistmain
  prop_productquickview -.->|used by| browseviewmain
  prop_productbadges -.->|used by| productquickview
  prop_productbadges -.->|used by| singleproductview
  prop_productlist -.->|used by| productslistmain
  prop_productlist -.->|used by| page
  prop_productlist -.->|used by| page
  prop_productcard -.->|used by| productslistmain
  prop_productcard -.->|used by| productcardwrapper
  prop_swipetoaction -.->|used by| shoppingcart
  prop_swipetoaction -.->|used by| confirmationmodal
  prop_swipetoaction -.->|used by| cartbutton
  prop_swipetoaction -.->|used by| cartcheck
  prop_sharemodal -.->|used by| singleproductview
  prop_sharemodal -.->|used by| menu
  prop_sharemodal -.->|used by| sharemodal
  prop_generatemetadata -.->|used by| layout
  prop_generatemetadata -.->|used by| page
  prop_generatemetadata -.->|used by| page
  prop_generatemetadata -.->|used by| page
  prop_userauthmodal -.->|used by| authbutton
  prop_userauthmodal -.->|used by| menu
  prop_userauthmodal -.->|used by| cartbutton
  prop_userauthmodal -.->|used by| cartcheck
  prop_ricloseline -.->|used by| userauthmodal
  prop_helpmodal -.->|used by| helpmodal
  prop_helpmodal -.->|used by| menu
  prop_addressmodal -.->|used by| menu
  prop_addressmodal -.->|used by| addressmodal
  prop_addressmodal -.->|used by| cartcheck
  prop_shineeffect -.->|used by| swipetoaction
  prop_notemodal -.->|used by| notemodal
  prop_notemodal -.->|used by| cartcheck
  prop_categorynavigation -.->|used by| browseviewmain
  prop_categorynavigation -.->|used by| categorynavigationbar
  prop_productsection -.->|used by| browseviewmain
  prop_productsection -.->|used by| productsection
  prop_productcardwrapper -.->|used by| productcardwrapper
  prop_productcardwrapper -.->|used by| productsection
  prop_checkout -.->|used by| checkout
  prop_checkout -.->|used by| checkoutmodal
  prop_checkoutmodal -.->|used by| checkoutmodal
  prop_checkoutmodal -.->|used by| cartbutton
  prop_formatcacheage -.->|used by| formatting
  prop_formatcacheage -.->|used by| index
  prop_formatcacheage -.->|used by| index
  prop_formatcachetime -.->|used by| formatting
  prop_formatcachetime -.->|used by| index
  prop_formathumantime -.->|used by| formatting
  prop_formathumantime -.->|used by| index
  prop_get -.->|used by| route
  prop_get -.->|used by| route
  prop_get -.->|used by| route
  prop_get -.->|used by| route
  prop_get -.->|used by| route
  prop_get -.->|used by| route
  prop_get -.->|used by| route
  prop_get -.->|used by| route
  prop_get -.->|used by| route
  prop_post -.->|used by| route
  prop_post -.->|used by| route
  prop_post -.->|used by| route
  prop_post -.->|used by| route
  prop_post -.->|used by| route
  prop_post -.->|used by| route
  prop_put -.->|used by| route
  prop_put -.->|used by| route
  prop_put -.->|used by| route
  %% Object relationships
  %% Array relationships
  %% Map operations
  items -->|mapped in| cartcontext
  prevcart -->|mapped in| cartcontext
  prev -->|mapped in| cartcontext
  cartitems -->|mapped in| cartcontext
  cartitems -->|mapped in| shoppingcart
  cartitems -->|mapped in| dealsdebugpanel
  cartitems -->|mapped in| checkout
  cartitems -->|mapped in| checkout
  cartitems -->|mapped in| cartcheck
  dealsarray -->|mapped in| dealscontext
  filteredcategories -->|mapped in| categoryselectionmain
  dietaryflags -->|mapped in| headersearch
  dietaryflags -->|mapped in| productbadges
  searchresults -->|mapped in| headersearch
  displayproducts -->|mapped in| productslistmain
  containslist -->|mapped in| singleproductview
  maycontainlist -->|mapped in| singleproductview
  orders -->|mapped in| orderhistory
  results -->|mapped in| searchresults
  sortedmaincategories -->|mapped in| categorynavigationbar
  visibleproducts -->|mapped in| productsection
  itemswiththisdeal -->|mapped in| dealsdebugpanel
  deals -->|mapped in| dealsdebugpanel
  alldealstoshow -->|mapped in| dealsdebugpanel
  allproducts -->|mapped in| wp_api
  existinglineitems -->|mapped in| route
  line_items -->|mapped in| route

```

## Imports

### API Routes

- **/home/ctp/Github/shuk-sham/app/api/monitoring/route.ts** → `next/server`
- **/home/ctp/Github/shuk-sham/app/api/monitoring/route.ts** → `@/lib/utils/monitoring/cache-metrics`
- **/home/ctp/Github/shuk-sham/app/api/monitoring/route.ts** → `@/lib/utils/cache/redis`
- **/home/ctp/Github/shuk-sham/app/api/monitoring/route.ts** → `@/lib/utils/logger`
- **/home/ctp/Github/shuk-sham/app/api/monitoring/route.ts** → `os`
- **/home/ctp/Github/shuk-sham/app/api/order/route.ts** → `next/server`
- **/home/ctp/Github/shuk-sham/app/api/order/route.ts** → `@/lib/utils/auth/wp-auth`
- **/home/ctp/Github/shuk-sham/app/api/order/route.ts** → `@/lib/utils/auth/index`
- **/home/ctp/Github/shuk-sham/app/api/users/route.ts** → `next/server`
- **/home/ctp/Github/shuk-sham/app/api/users/route.ts** → `@/lib/utils/auth/wp-auth`
- **/home/ctp/Github/shuk-sham/lib/utils/api/fetchers.ts** → `@/lib/utils/logger`
- **/home/ctp/Github/shuk-sham/lib/utils/api/fetchers.ts** → `@/lib/types/global`
- **/home/ctp/Github/shuk-sham/lib/utils/api/index.ts** → `@/lib/types/global`
- **/home/ctp/Github/shuk-sham/lib/utils/api/index.ts** → `@/lib/utils/api/constants`
- **/home/ctp/Github/shuk-sham/lib/utils/api/swr-config.ts** → `swr`
- **/home/ctp/Github/shuk-sham/lib/utils/api/swr-config.ts** → `@/lib/constants`
- **/home/ctp/Github/shuk-sham/lib/utils/api/user-api.ts** → `@/lib/types/global`
- **/home/ctp/Github/shuk-sham/lib/utils/api/user-api.ts** → `@/lib/utils/logger`
- **/home/ctp/Github/shuk-sham/lib/utils/api/wp-api.ts** → `@/lib/utils/auth/wp-auth`
- **/home/ctp/Github/shuk-sham/lib/utils/api/wp-api.ts** → `@/lib/types/global`
- **/home/ctp/Github/shuk-sham/lib/utils/api/wp-api.ts** → `@/lib/utils/logger`
- **/home/ctp/Github/shuk-sham/app/api/[locale]/category/route.ts** → `next/server`
- **/home/ctp/Github/shuk-sham/app/api/[locale]/category/route.ts** → `@/lib/types/global`
- **/home/ctp/Github/shuk-sham/app/api/[locale]/category/route.ts** → `@/lib/utils/cache/wp-cache`
- **/home/ctp/Github/shuk-sham/app/api/[locale]/category/route.ts** → `@/lib/utils/cache/index`
- **/home/ctp/Github/shuk-sham/app/api/[locale]/category/route.ts** → `@/lib/constants`
- **/home/ctp/Github/shuk-sham/app/api/[locale]/products/route.ts** → `next/server`
- **/home/ctp/Github/shuk-sham/app/api/[locale]/products/route.ts** → `@/lib/types/global`
- **/home/ctp/Github/shuk-sham/app/api/[locale]/products/route.ts** → `@/lib/utils/cache/wp-cache`
- **/home/ctp/Github/shuk-sham/app/api/[locale]/products/route.ts** → `@/lib/utils/cache/index`
- **/home/ctp/Github/shuk-sham/app/api/[locale]/products/route.ts** → `@/lib/constants`
- **/home/ctp/Github/shuk-sham/app/api/dev/clear-cache/route.ts** → `next/server`
- **/home/ctp/Github/shuk-sham/app/api/dev/clear-cache/route.ts** → `@/lib/utils/cache/wp-cache`
- **/home/ctp/Github/shuk-sham/app/api/dev/clear-cache/route.ts** → `@/lib/utils/cache/redis`
- **/home/ctp/Github/shuk-sham/app/api/monitoring/metrics/route.ts** → `next/server`
- **/home/ctp/Github/shuk-sham/app/api/monitoring/metrics/route.ts** → `@/lib/utils/monitoring/cache-metrics`
- **/home/ctp/Github/shuk-sham/app/api/monitoring/metrics/route.ts** → `@/lib/utils/logger`
- **/home/ctp/Github/shuk-sham/app/api/order/[id]/route.ts** → `next/server`
- **/home/ctp/Github/shuk-sham/app/api/order/[id]/route.ts** → `@/lib/utils/auth/wp-auth`
- **/home/ctp/Github/shuk-sham/app/api/order/customer/route.ts** → `next/server`
- **/home/ctp/Github/shuk-sham/app/api/order/customer/route.ts** → `@/lib/utils/auth/wp-auth`
- **/home/ctp/Github/shuk-sham/app/api/order/customer/route.ts** → `@/lib/utils/auth/index`
- **/home/ctp/Github/shuk-sham/app/api/users/[id]/route.ts** → `next/server`
- **/home/ctp/Github/shuk-sham/app/api/users/[id]/route.ts** → `@/lib/utils/auth/wp-auth`
- **/home/ctp/Github/shuk-sham/app/api/users/logout/route.ts** → `next/server`
- **/home/ctp/Github/shuk-sham/app/api/users/logout/route.ts** → `@/lib/utils/auth/auth`
- **/home/ctp/Github/shuk-sham/app/api/users/me/route.ts** → `next/server`
- **/home/ctp/Github/shuk-sham/app/api/users/me/route.ts** → `@/lib/utils/auth/wp-auth`
- **/home/ctp/Github/shuk-sham/app/api/users/me/route.ts** → `@/lib/utils/auth/auth`
- **/home/ctp/Github/shuk-sham/app/api/users/me/route.ts** → `@/lib/constants`
- **/home/ctp/Github/shuk-sham/app/api/users/me/route.ts** → `@/lib/utils/cache/redis`
- **/home/ctp/Github/shuk-sham/app/api/users/me/route.ts** → `@/lib/utils/logger`
- **/home/ctp/Github/shuk-sham/app/api/users/me/route.ts** → `@/lib/utils/cache-keys`
- **/home/ctp/Github/shuk-sham/app/api/users/me/route.ts** → `@/lib/utils/cache-diagnostic`
- **/home/ctp/Github/shuk-sham/app/api/users/me/route.ts** → `uuid`
- **/home/ctp/Github/shuk-sham/app/api/users/send-otp/route.ts** → `next/server`
- **/home/ctp/Github/shuk-sham/app/api/users/send-otp/route.ts** → `@/lib/utils/auth/wp-auth`
- **/home/ctp/Github/shuk-sham/app/api/users/verify-otp/route.ts** → `next/server`
- **/home/ctp/Github/shuk-sham/app/api/users/verify-otp/route.ts** → `@/lib/utils/auth/wp-auth`
- **/home/ctp/Github/shuk-sham/app/api/[locale]/products/[id]/route.ts** → `next/server`
- **/home/ctp/Github/shuk-sham/app/api/[locale]/products/[id]/route.ts** → `@/lib/types/global`
- **/home/ctp/Github/shuk-sham/app/api/[locale]/products/[id]/route.ts** → `@/lib/utils/cache/wp-cache`
- **/home/ctp/Github/shuk-sham/app/api/[locale]/products/[id]/route.ts** → `@/lib/utils/cache/index`
- **/home/ctp/Github/shuk-sham/app/api/[locale]/products/[id]/route.ts** → `@/lib/constants`
- **/home/ctp/Github/shuk-sham/app/api/[locale]/products/[id]/route.ts** → `@/lib/types/deals`
- **/home/ctp/Github/shuk-sham/app/api/monitoring/metrics/reset/route.ts** → `next/server`
- **/home/ctp/Github/shuk-sham/app/api/monitoring/metrics/reset/route.ts** → `@/lib/utils/monitoring/cache-metrics`
- **/home/ctp/Github/shuk-sham/app/api/monitoring/metrics/reset/route.ts** → `@/lib/utils/logger`
- **/home/ctp/Github/shuk-sham/app/api/order/customer/[id]/route.ts** → `next/server`
- **/home/ctp/Github/shuk-sham/app/api/order/customer/[id]/route.ts** → `@/lib/utils/auth/wp-auth`

### Pages

- **/home/ctp/Github/shuk-sham/app/[locale]/layout.tsx** → `next-intl`
- **/home/ctp/Github/shuk-sham/app/[locale]/layout.tsx** → `next-intl/server`
- **/home/ctp/Github/shuk-sham/app/[locale]/layout.tsx** → `next/navigation`
- **/home/ctp/Github/shuk-sham/app/[locale]/layout.tsx** → `@/i18n/routing`
- **/home/ctp/Github/shuk-sham/app/[locale]/layout.tsx** → `./globals.css`
- **/home/ctp/Github/shuk-sham/app/[locale]/layout.tsx** → `@/contexts/CartContext`
- **/home/ctp/Github/shuk-sham/app/[locale]/layout.tsx** → `@/contexts/AuthContext`
- **/home/ctp/Github/shuk-sham/app/[locale]/layout.tsx** → `@/components/shopping-cart/CartButton`
- **/home/ctp/Github/shuk-sham/app/[locale]/layout.tsx** → `@/messages/HeroMessages`
- **/home/ctp/Github/shuk-sham/app/[locale]/layout.tsx** → `react`
- **/home/ctp/Github/shuk-sham/app/[locale]/layout.tsx** → `@/contexts/DataContext`
- **/home/ctp/Github/shuk-sham/app/[locale]/layout.tsx** → `@/components/shopping-cart/CartStatePersistenceHandler`
- **/home/ctp/Github/shuk-sham/app/[locale]/layout.tsx** → `next/script`
- **/home/ctp/Github/shuk-sham/app/[locale]/layout.tsx** → `next`
- **/home/ctp/Github/shuk-sham/app/[locale]/layout.tsx** → `@/lib/siteConfig`
- **/home/ctp/Github/shuk-sham/app/[locale]/layout.tsx** → `@/lib/utils/logger`
- **/home/ctp/Github/shuk-sham/app/[locale]/layout.tsx** → `./providers`
- **/home/ctp/Github/shuk-sham/app/[locale]/layout.tsx** → `@/components/Header`
- **/home/ctp/Github/shuk-sham/app/[locale]/layout.tsx** → `@/components/ConditionalHero`
- **/home/ctp/Github/shuk-sham/app/[locale]/layout.tsx** → `@/components/dev/DevTools`
- **/home/ctp/Github/shuk-sham/app/[locale]/layout.tsx** → `@/components/debug/DealsDebugPanel`
- **/home/ctp/Github/shuk-sham/app/[locale]/not-found.tsx** → `react`
- **/home/ctp/Github/shuk-sham/app/[locale]/not-found.tsx** → `next/navigation`
- **/home/ctp/Github/shuk-sham/app/[locale]/page.tsx** → `@/components/CategorySelectionMain`
- **/home/ctp/Github/shuk-sham/app/[locale]/page.tsx** → `@/components/ProductsListMain`
- **/home/ctp/Github/shuk-sham/app/[locale]/page.tsx** → `next-intl`
- **/home/ctp/Github/shuk-sham/app/[locale]/page.tsx** → `next-intl/server`
- **/home/ctp/Github/shuk-sham/app/[locale]/page.tsx** → `@/components/BackgroundFetcher`
- **/home/ctp/Github/shuk-sham/app/[locale]/page.tsx** → `next`
- **/home/ctp/Github/shuk-sham/app/[locale]/page.tsx** → `@/lib/siteConfig`
- **/home/ctp/Github/shuk-sham/app/[locale]/page.tsx** → `@/i18n/routing`
- **/home/ctp/Github/shuk-sham/app/[locale]/providers.tsx** → `react`
- **/home/ctp/Github/shuk-sham/app/[locale]/providers.tsx** → `swr`
- **/home/ctp/Github/shuk-sham/app/[locale]/providers.tsx** → `@/lib/utils/logger`
- **/home/ctp/Github/shuk-sham/app/[locale]/providers.tsx** → `@/lib/constants`
- **/home/ctp/Github/shuk-sham/app/[locale]/providers.tsx** → `@/contexts/DealsContext`
- **/home/ctp/Github/shuk-sham/app/[locale]/browse/page.tsx** → `@/components/BrowseViewWrapper`
- **/home/ctp/Github/shuk-sham/app/[locale]/browse/page.tsx** → `react`
- **/home/ctp/Github/shuk-sham/app/[locale]/browse/page.tsx** → `@/components/actions/Loading`
- **/home/ctp/Github/shuk-sham/app/[locale]/browse/page.tsx** → `next`
- **/home/ctp/Github/shuk-sham/app/[locale]/browse/page.tsx** → `next-intl/server`
- **/home/ctp/Github/shuk-sham/app/[locale]/browse/page.tsx** → `@/lib/siteConfig`
- **/home/ctp/Github/shuk-sham/app/[locale]/browse/page.tsx** → `@/i18n/routing`
- **/home/ctp/Github/shuk-sham/app/[locale]/browse/page.tsx** → `@/components/BackgroundFetcher`
- **/home/ctp/Github/shuk-sham/app/[locale]/cart-check/page.tsx** → `react`
- **/home/ctp/Github/shuk-sham/app/[locale]/cart-check/page.tsx** → `@/components/shopping-cart/CartCheck`
- **/home/ctp/Github/shuk-sham/app/[locale]/cart-check/page.tsx** → `@/components/ProductsListMain`
- **/home/ctp/Github/shuk-sham/app/[locale]/cart-check/page.tsx** → `next-intl`
- **/home/ctp/Github/shuk-sham/app/[locale]/order-confirmation/page.tsx** → `react`
- **/home/ctp/Github/shuk-sham/app/[locale]/order-confirmation/page.tsx** → `next/navigation`
- **/home/ctp/Github/shuk-sham/app/[locale]/order-confirmation/page.tsx** → `next/link`
- **/home/ctp/Github/shuk-sham/app/[locale]/order-confirmation/page.tsx** → `@/messages/orderConfirmation`
- **/home/ctp/Github/shuk-sham/app/[locale]/user-dashboard/page.tsx** → `react`
- **/home/ctp/Github/shuk-sham/app/[locale]/user-dashboard/page.tsx** → `next/navigation`
- **/home/ctp/Github/shuk-sham/app/[locale]/user-dashboard/page.tsx** → `@/components/UserDashboard`
- **/home/ctp/Github/shuk-sham/app/[locale]/user-dashboard/page.tsx** → `next-intl`
- **/home/ctp/Github/shuk-sham/app/[locale]/product/[id]/page.tsx** → `react`
- **/home/ctp/Github/shuk-sham/app/[locale]/product/[id]/page.tsx** → `next-intl/server`
- **/home/ctp/Github/shuk-sham/app/[locale]/product/[id]/page.tsx** → `next`
- **/home/ctp/Github/shuk-sham/app/[locale]/product/[id]/page.tsx** → `@/components/ProductPageContent`
- **/home/ctp/Github/shuk-sham/app/[locale]/product/[id]/page.tsx** → `@/lib/siteConfig`
- **/home/ctp/Github/shuk-sham/app/[locale]/product/[id]/page.tsx** → `@/lib/utils/cache/wp-cache`
- **/home/ctp/Github/shuk-sham/app/[locale]/product/[id]/page.tsx** → `@/lib/types/global`

### Components

- **/home/ctp/Github/shuk-sham/components/BackgroundFetcher.tsx** → `react`
- **/home/ctp/Github/shuk-sham/components/BackgroundFetcher.tsx** → `next/navigation`
- **/home/ctp/Github/shuk-sham/components/BackgroundFetcher.tsx** → `swr`
- **/home/ctp/Github/shuk-sham/components/BackgroundFetcher.tsx** → `@/lib/types/global`
- **/home/ctp/Github/shuk-sham/components/BackgroundFetcher.tsx** → `@/lib/utils/api/fetchers`
- **/home/ctp/Github/shuk-sham/components/BackgroundFetcher.tsx** → `@/lib/utils/logger`
- **/home/ctp/Github/shuk-sham/components/BackgroundFetcher.tsx** → `@/app/[locale]/providers`
- **/home/ctp/Github/shuk-sham/components/BackgroundFetcher.tsx** → `@/lib/constants`
- **/home/ctp/Github/shuk-sham/components/BrowseViewWrapper.tsx** → `react`
- **/home/ctp/Github/shuk-sham/components/BrowseViewWrapper.tsx** → `./browse/BrowseViewMain`
- **/home/ctp/Github/shuk-sham/components/BrowseViewWrapper.tsx** → `@/app/[locale]/providers`
- **/home/ctp/Github/shuk-sham/components/CategorySelectionMain.tsx** → `react`
- **/home/ctp/Github/shuk-sham/components/CategorySelectionMain.tsx** → `next/image`
- **/home/ctp/Github/shuk-sham/components/CategorySelectionMain.tsx** → `next/navigation`
- **/home/ctp/Github/shuk-sham/components/CategorySelectionMain.tsx** → `@/contexts/DataContext`
- **/home/ctp/Github/shuk-sham/components/ConditionalHero.tsx** → `react`
- **/home/ctp/Github/shuk-sham/components/ConditionalHero.tsx** → `next/navigation`
- **/home/ctp/Github/shuk-sham/components/ConditionalHero.tsx** → `@/components/Hero`
- **/home/ctp/Github/shuk-sham/components/ConditionalHero.tsx** → `@/lib/types/global`
- **/home/ctp/Github/shuk-sham/components/Header.tsx** → `react`
- **/home/ctp/Github/shuk-sham/components/Header.tsx** → `next/navigation`
- **/home/ctp/Github/shuk-sham/components/Header.tsx** → `lucide-react`
- **/home/ctp/Github/shuk-sham/components/Header.tsx** → `./actions/Menu`
- **/home/ctp/Github/shuk-sham/components/Header.tsx** → `./actions/ProductSearchManager`
- **/home/ctp/Github/shuk-sham/components/HeaderSearch.tsx** → `react`
- **/home/ctp/Github/shuk-sham/components/HeaderSearch.tsx** → `next/navigation`
- **/home/ctp/Github/shuk-sham/components/HeaderSearch.tsx** → `next-intl`
- **/home/ctp/Github/shuk-sham/components/HeaderSearch.tsx** → `@/lib/types/global`
- **/home/ctp/Github/shuk-sham/components/HeaderSearch.tsx** → `@/lib/utils/filter/index`
- **/home/ctp/Github/shuk-sham/components/HeaderSearch.tsx** → `next/image`
- **/home/ctp/Github/shuk-sham/components/Hero.tsx** → `react`
- **/home/ctp/Github/shuk-sham/components/Hero.tsx** → `next/image`
- **/home/ctp/Github/shuk-sham/components/Hero.tsx** → `next/link`
- **/home/ctp/Github/shuk-sham/components/Hero.tsx** → `@/lib/types/global`
- **/home/ctp/Github/shuk-sham/components/Hero.tsx** → `next/navigation`
- **/home/ctp/Github/shuk-sham/components/ProductBadges.tsx** → `react`
- **/home/ctp/Github/shuk-sham/components/ProductBadges.tsx** → `next/image`
- **/home/ctp/Github/shuk-sham/components/ProductBadges.tsx** → `@/lib/types/global`
- **/home/ctp/Github/shuk-sham/components/ProductBadges.tsx** → `next/navigation`
- **/home/ctp/Github/shuk-sham/components/ProductBreadcrumb.tsx** → `react`
- **/home/ctp/Github/shuk-sham/components/ProductBreadcrumb.tsx** → `next/link`
- **/home/ctp/Github/shuk-sham/components/ProductBreadcrumb.tsx** → `next/navigation`
- **/home/ctp/Github/shuk-sham/components/ProductCard.tsx** → `react`
- **/home/ctp/Github/shuk-sham/components/ProductCard.tsx** → `next/image`
- **/home/ctp/Github/shuk-sham/components/ProductCard.tsx** → `@/contexts/CartContext`
- **/home/ctp/Github/shuk-sham/components/ProductCard.tsx** → `@/lib/types/global`
- **/home/ctp/Github/shuk-sham/components/ProductCard.tsx** → `next/navigation`
- **/home/ctp/Github/shuk-sham/components/ProductCard.tsx** → `./SaleRibbon`
- **/home/ctp/Github/shuk-sham/components/ProductCard.tsx** → `@/messages/he.json`
- **/home/ctp/Github/shuk-sham/components/ProductCard.tsx** → `@/messages/ar.json`
- **/home/ctp/Github/shuk-sham/components/ProductPageContent.tsx** → `react`
- **/home/ctp/Github/shuk-sham/components/ProductPageContent.tsx** → `@/components/SingleProductView`
- **/home/ctp/Github/shuk-sham/components/ProductQuickView.tsx** → `react`
- **/home/ctp/Github/shuk-sham/components/ProductQuickView.tsx** → `next/image`
- **/home/ctp/Github/shuk-sham/components/ProductQuickView.tsx** → `@/contexts/CartContext`
- **/home/ctp/Github/shuk-sham/components/ProductQuickView.tsx** → `next/navigation`
- **/home/ctp/Github/shuk-sham/components/ProductQuickView.tsx** → `@/lib/types/global`
- **/home/ctp/Github/shuk-sham/components/ProductQuickView.tsx** → `@/lib/utils/product/index`
- **/home/ctp/Github/shuk-sham/components/ProductQuickView.tsx** → `./ProductBadges`
- **/home/ctp/Github/shuk-sham/components/ProductsListMain.tsx** → `react`
- **/home/ctp/Github/shuk-sham/components/ProductsListMain.tsx** → `./ProductCard`
- **/home/ctp/Github/shuk-sham/components/ProductsListMain.tsx** → `@/lib/types/global`
- **/home/ctp/Github/shuk-sham/components/ProductsListMain.tsx** → `@/lib/utils/product/index`
- **/home/ctp/Github/shuk-sham/components/ProductsListMain.tsx** → `@/contexts/DataContext`
- **/home/ctp/Github/shuk-sham/components/ProductsListMain.tsx** → `./ProductQuickView`
- **/home/ctp/Github/shuk-sham/components/ProductsListMain.tsx** → `lucide-react`
- **/home/ctp/Github/shuk-sham/components/ProductsListMain.tsx** → `@/lib/hooks/useDragScroll`
- **/home/ctp/Github/shuk-sham/components/ProductsListMain.tsx** → `@/contexts/AuthContext`
- **/home/ctp/Github/shuk-sham/components/ProductsListMain.tsx** → `next/navigation`
- **/home/ctp/Github/shuk-sham/components/ProductsListMain.tsx** → `@/lib/hooks/useOrders`
- **/home/ctp/Github/shuk-sham/components/SaleRibbon.tsx** → `react`
- **/home/ctp/Github/shuk-sham/components/SaleRibbon.tsx** → `next/navigation`
- **/home/ctp/Github/shuk-sham/components/SaleRibbon.tsx** → `@/lib/types/global`
- **/home/ctp/Github/shuk-sham/components/ShoppingCart.tsx** → `react`
- **/home/ctp/Github/shuk-sham/components/ShoppingCart.tsx** → `next/image`
- **/home/ctp/Github/shuk-sham/components/ShoppingCart.tsx** → `next/link`
- **/home/ctp/Github/shuk-sham/components/ShoppingCart.tsx** → `@/contexts/CartContext`
- **/home/ctp/Github/shuk-sham/components/ShoppingCart.tsx** → `./actions/SwipeToAction`
- **/home/ctp/Github/shuk-sham/components/ShoppingCart.tsx** → `next/navigation`
- **/home/ctp/Github/shuk-sham/components/SingleProductView.tsx** → `react`
- **/home/ctp/Github/shuk-sham/components/SingleProductView.tsx** → `next/image`
- **/home/ctp/Github/shuk-sham/components/SingleProductView.tsx** → `@/contexts/CartContext`
- **/home/ctp/Github/shuk-sham/components/SingleProductView.tsx** → `next/navigation`
- **/home/ctp/Github/shuk-sham/components/SingleProductView.tsx** → `@/lib/types/global`
- **/home/ctp/Github/shuk-sham/components/SingleProductView.tsx** → `next-intl`
- **/home/ctp/Github/shuk-sham/components/SingleProductView.tsx** → `@/lib/utils/product/index`
- **/home/ctp/Github/shuk-sham/components/SingleProductView.tsx** → `./ProductBadges`
- **/home/ctp/Github/shuk-sham/components/SingleProductView.tsx** → `./actions/ShareModal`
- **/home/ctp/Github/shuk-sham/components/SingleProductView.tsx** → `./SaleRibbon`
- **/home/ctp/Github/shuk-sham/components/SingleProductView.tsx** → `@/lib/hooks/useProduct`
- **/home/ctp/Github/shuk-sham/components/SingleProductView.tsx** → `@/components/actions/Loading`
- **/home/ctp/Github/shuk-sham/components/SingleProductView.tsx** → `@/components/ProductBreadcrumb`
- **/home/ctp/Github/shuk-sham/components/UserDashboard.tsx** → `react`
- **/home/ctp/Github/shuk-sham/components/UserDashboard.tsx** → `next/navigation`
- **/home/ctp/Github/shuk-sham/components/UserDashboard.tsx** → `next-intl`
- **/home/ctp/Github/shuk-sham/components/UserDashboard.tsx** → `./UserProfile`
- **/home/ctp/Github/shuk-sham/components/UserDashboard.tsx** → `@/contexts/AuthContext`
- **/home/ctp/Github/shuk-sham/components/UserDashboard.tsx** → `@/lib/utils/logger`
- **/home/ctp/Github/shuk-sham/components/UserProfile/OrderHistory.tsx** → `react`
- **/home/ctp/Github/shuk-sham/components/UserProfile/OrderHistory.tsx** → `next-intl`
- **/home/ctp/Github/shuk-sham/components/UserProfile/OrderHistory.tsx** → `next/navigation`
- **/home/ctp/Github/shuk-sham/components/UserProfile/OrderHistory.tsx** → `@/contexts/CartContext`
- **/home/ctp/Github/shuk-sham/components/UserProfile/OrderHistory.tsx** → `@/lib/types/checkout`
- **/home/ctp/Github/shuk-sham/components/UserProfile/OrderHistory.tsx** → `@/lib/hooks/useOrders`
- **/home/ctp/Github/shuk-sham/components/UserProfile/PersonalInfo.tsx** → `react`
- **/home/ctp/Github/shuk-sham/components/UserProfile/PersonalInfo.tsx** → `next/navigation`
- **/home/ctp/Github/shuk-sham/components/UserProfile/PersonalInfo.tsx** → `next-intl`
- **/home/ctp/Github/shuk-sham/components/UserProfile/PersonalInfo.tsx** → `@/lib/types/user`
- **/home/ctp/Github/shuk-sham/components/auth/AuthButton.tsx** → `react`
- **/home/ctp/Github/shuk-sham/components/auth/AuthButton.tsx** → `react-icons/ri`
- **/home/ctp/Github/shuk-sham/components/auth/AuthButton.tsx** → `./UserAuthModal`
- **/home/ctp/Github/shuk-sham/components/auth/AuthButton.tsx** → `@/contexts/AuthContext`
- **/home/ctp/Github/shuk-sham/components/auth/UserAuthModal.tsx** → `react`
- **/home/ctp/Github/shuk-sham/components/auth/UserAuthModal.tsx** → `react-icons/ri`
- **/home/ctp/Github/shuk-sham/components/auth/UserAuthModal.tsx** → `next/navigation`
- **/home/ctp/Github/shuk-sham/components/auth/UserAuthModal.tsx** → `@/lib/types/global`
- **/home/ctp/Github/shuk-sham/components/actions/ConfirmationModal.tsx** → `react`
- **/home/ctp/Github/shuk-sham/components/actions/ConfirmationModal.tsx** → `@/lib/types/global`
- **/home/ctp/Github/shuk-sham/components/actions/ConfirmationModal.tsx** → `./SwipeToAction`
- **/home/ctp/Github/shuk-sham/components/actions/ConfirmationModal.tsx** → `next/navigation`
- **/home/ctp/Github/shuk-sham/components/actions/EmptyCartNotification.tsx** → `react`
- **/home/ctp/Github/shuk-sham/components/actions/EmptyCartNotification.tsx** → `@/lib/types/global`
- **/home/ctp/Github/shuk-sham/components/actions/EmptyCartNotification.tsx** → `next-intl`
- **/home/ctp/Github/shuk-sham/components/actions/HelpModal.tsx** → `react`
- **/home/ctp/Github/shuk-sham/components/actions/Menu.tsx** → `react`
- **/home/ctp/Github/shuk-sham/components/actions/Menu.tsx** → `next/image`
- **/home/ctp/Github/shuk-sham/components/actions/Menu.tsx** → `next/link`
- **/home/ctp/Github/shuk-sham/components/actions/Menu.tsx** → `lucide-react`
- **/home/ctp/Github/shuk-sham/components/actions/Menu.tsx** → `next/navigation`
- **/home/ctp/Github/shuk-sham/components/actions/Menu.tsx** → `../shopping-cart/AddressModal`
- **/home/ctp/Github/shuk-sham/components/actions/Menu.tsx** → `@/lib/hooks/useUser`
- **/home/ctp/Github/shuk-sham/components/actions/Menu.tsx** → `./HelpModal`
- **/home/ctp/Github/shuk-sham/components/actions/Menu.tsx** → `../auth/UserAuthModal`
- **/home/ctp/Github/shuk-sham/components/actions/Menu.tsx** → `@/lib/hooks/useFlashEffect`
- **/home/ctp/Github/shuk-sham/components/actions/Menu.tsx** → `./ShareModal`
- **/home/ctp/Github/shuk-sham/components/actions/ProductSearchManager.tsx** → `react`
- **/home/ctp/Github/shuk-sham/components/actions/ProductSearchManager.tsx** → `next/image`
- **/home/ctp/Github/shuk-sham/components/actions/ProductSearchManager.tsx** → `next/navigation`
- **/home/ctp/Github/shuk-sham/components/actions/ProductSearchManager.tsx** → `@/contexts/DataContext`
- **/home/ctp/Github/shuk-sham/components/actions/ProductSearchManager.tsx** → `@/lib/types/global`
- **/home/ctp/Github/shuk-sham/components/actions/ProductSearchManager.tsx** → `./SearchResults`
- **/home/ctp/Github/shuk-sham/components/actions/SearchResults.tsx** → `react`
- **/home/ctp/Github/shuk-sham/components/actions/SearchResults.tsx** → `next/image`
- **/home/ctp/Github/shuk-sham/components/actions/SearchResults.tsx** → `@/lib/types/global`
- **/home/ctp/Github/shuk-sham/components/actions/SearchResults.tsx** → `@/lib/utils/product/index`
- **/home/ctp/Github/shuk-sham/components/actions/SearchResults.tsx** → `@/contexts/CartContext`
- **/home/ctp/Github/shuk-sham/components/actions/SearchResults.tsx** → `@/lib/hooks/useFlashEffect`
- **/home/ctp/Github/shuk-sham/components/actions/ShareModal.tsx** → `react`
- **/home/ctp/Github/shuk-sham/components/actions/ShineEffect.tsx** → `react`
- **/home/ctp/Github/shuk-sham/components/actions/ShineEffect.tsx** → `@/lib/types/global`
- **/home/ctp/Github/shuk-sham/components/actions/SwipeToAction.tsx** → `react`
- **/home/ctp/Github/shuk-sham/components/actions/SwipeToAction.tsx** → `@/lib/types/global`
- **/home/ctp/Github/shuk-sham/components/actions/SwipeToAction.tsx** → `next/navigation`
- **/home/ctp/Github/shuk-sham/components/actions/SwipeToAction.tsx** → `@/messages/he.json`
- **/home/ctp/Github/shuk-sham/components/actions/SwipeToAction.tsx** → `@/messages/ar.json`
- **/home/ctp/Github/shuk-sham/components/actions/SwipeToAction.tsx** → `./ShineEffect`
- **/home/ctp/Github/shuk-sham/components/actions/noteModal.tsx** → `react`
- **/home/ctp/Github/shuk-sham/components/actions/noteModal.tsx** → `@/lib/types/global`
- **/home/ctp/Github/shuk-sham/components/browse/BrowseViewMain.tsx** → `react`
- **/home/ctp/Github/shuk-sham/components/browse/BrowseViewMain.tsx** → `next/navigation`
- **/home/ctp/Github/shuk-sham/components/browse/BrowseViewMain.tsx** → `@/lib/types/global`
- **/home/ctp/Github/shuk-sham/components/browse/BrowseViewMain.tsx** → `@/lib/hooks`
- **/home/ctp/Github/shuk-sham/components/browse/BrowseViewMain.tsx** → `./CategoryNavigationBar`
- **/home/ctp/Github/shuk-sham/components/browse/BrowseViewMain.tsx** → `./ProductSection`
- **/home/ctp/Github/shuk-sham/components/browse/BrowseViewMain.tsx** → `../ProductQuickView`
- **/home/ctp/Github/shuk-sham/components/browse/CategoryNavigationBar.tsx** → `react`
- **/home/ctp/Github/shuk-sham/components/browse/CategoryNavigationBar.tsx** → `@/lib/types/global`
- **/home/ctp/Github/shuk-sham/components/browse/CategoryNavigationBar.tsx** → `next/navigation`
- **/home/ctp/Github/shuk-sham/components/browse/ProductCardWrapper.tsx** → `react`
- **/home/ctp/Github/shuk-sham/components/browse/ProductCardWrapper.tsx** → `../ProductCard`
- **/home/ctp/Github/shuk-sham/components/browse/ProductCardWrapper.tsx** → `@/lib/types/global`
- **/home/ctp/Github/shuk-sham/components/browse/ProductCardWrapper.tsx** → `@/lib/utils/product/index`
- **/home/ctp/Github/shuk-sham/components/browse/ProductSection.tsx** → `react`
- **/home/ctp/Github/shuk-sham/components/browse/ProductSection.tsx** → `@/lib/types/global`
- **/home/ctp/Github/shuk-sham/components/browse/ProductSection.tsx** → `./ProductCardWrapper`
- **/home/ctp/Github/shuk-sham/components/browse/ProductSection.tsx** → `react-intersection-observer`
- **/home/ctp/Github/shuk-sham/components/debug/DealsDebugPanel.tsx** → `react`
- **/home/ctp/Github/shuk-sham/components/debug/DealsDebugPanel.tsx** → `@/contexts/DealsContext`
- **/home/ctp/Github/shuk-sham/components/debug/DealsDebugPanel.tsx** → `@/contexts/CartContext`
- **/home/ctp/Github/shuk-sham/components/debug/DealsDebugPanel.tsx** → `@/lib/types/Deal`
- **/home/ctp/Github/shuk-sham/components/checkout/Checkout.tsx** → `react`
- **/home/ctp/Github/shuk-sham/components/checkout/Checkout.tsx** → `next/navigation`
- **/home/ctp/Github/shuk-sham/components/checkout/Checkout.tsx** → `@/contexts/CartContext`
- **/home/ctp/Github/shuk-sham/components/checkout/Checkout.tsx** → `@/lib/types/checkout`
- **/home/ctp/Github/shuk-sham/components/checkout/Checkout.tsx** → `next/image`
- **/home/ctp/Github/shuk-sham/components/checkout/Checkout.tsx** → `next/link`
- **/home/ctp/Github/shuk-sham/components/checkout/Checkout.tsx** → `@/lib/hooks/useUser`
- **/home/ctp/Github/shuk-sham/components/checkout/CheckoutModal.tsx** → `react`
- **/home/ctp/Github/shuk-sham/components/checkout/CheckoutModal.tsx** → `next/navigation`
- **/home/ctp/Github/shuk-sham/components/checkout/CheckoutModal.tsx** → `next/navigation`
- **/home/ctp/Github/shuk-sham/components/checkout/CheckoutModal.tsx** → `@/lib/types/checkout`
- **/home/ctp/Github/shuk-sham/components/checkout/CheckoutModal.tsx** → `./Checkout`
- **/home/ctp/Github/shuk-sham/components/shopping-cart/AddressModal.tsx** → `react`
- **/home/ctp/Github/shuk-sham/components/shopping-cart/AddressModal.tsx** → `@/lib/types/user`
- **/home/ctp/Github/shuk-sham/components/shopping-cart/CartButton.tsx** → `@/contexts/CartContext`
- **/home/ctp/Github/shuk-sham/components/shopping-cart/CartButton.tsx** → `next/navigation`
- **/home/ctp/Github/shuk-sham/components/shopping-cart/CartButton.tsx** → `react`
- **/home/ctp/Github/shuk-sham/components/shopping-cart/CartButton.tsx** → `next/navigation`
- **/home/ctp/Github/shuk-sham/components/shopping-cart/CartButton.tsx** → `../actions/SwipeToAction`
- **/home/ctp/Github/shuk-sham/components/shopping-cart/CartButton.tsx** → `../checkout/CheckoutModal`
- **/home/ctp/Github/shuk-sham/components/shopping-cart/CartButton.tsx** → `../auth/UserAuthModal`
- **/home/ctp/Github/shuk-sham/components/shopping-cart/CartButton.tsx** → `@/lib/hooks/useUser`
- **/home/ctp/Github/shuk-sham/components/shopping-cart/CartButton.tsx** → `@/lib/utils/api/user-api`
- **/home/ctp/Github/shuk-sham/components/shopping-cart/CartButton.tsx** → `@/messages/he.json`
- **/home/ctp/Github/shuk-sham/components/shopping-cart/CartButton.tsx** → `@/messages/ar.json`
- **/home/ctp/Github/shuk-sham/components/shopping-cart/CartCheck.tsx** → `react`
- **/home/ctp/Github/shuk-sham/components/shopping-cart/CartCheck.tsx** → `next/image`
- **/home/ctp/Github/shuk-sham/components/shopping-cart/CartCheck.tsx** → `next/link`
- **/home/ctp/Github/shuk-sham/components/shopping-cart/CartCheck.tsx** → `@/contexts/CartContext`
- **/home/ctp/Github/shuk-sham/components/shopping-cart/CartCheck.tsx** → `../actions/SwipeToAction`
- **/home/ctp/Github/shuk-sham/components/shopping-cart/CartCheck.tsx** → `next/navigation`
- **/home/ctp/Github/shuk-sham/components/shopping-cart/CartCheck.tsx** → `../auth/UserAuthModal`
- **/home/ctp/Github/shuk-sham/components/shopping-cart/CartCheck.tsx** → `./AddressModal`
- **/home/ctp/Github/shuk-sham/components/shopping-cart/CartCheck.tsx** → `@/lib/hooks/useUser`
- **/home/ctp/Github/shuk-sham/components/shopping-cart/CartCheck.tsx** → `../actions/noteModal`
- **/home/ctp/Github/shuk-sham/components/shopping-cart/CartStatePersistenceHandler.tsx** → `@/contexts/CartContext`
- **/home/ctp/Github/shuk-sham/components/shopping-cart/CartStatePersistenceHandler.tsx** → `next/navigation`
- **/home/ctp/Github/shuk-sham/components/shopping-cart/CartStatePersistenceHandler.tsx** → `react`
- **/home/ctp/Github/shuk-sham/components/shopping-cart/EmptyCartNotification.tsx** → `react`
- **/home/ctp/Github/shuk-sham/components/shopping-cart/EmptyCartNotification.tsx** → `@/lib/types/global`
- **/home/ctp/Github/shuk-sham/components/shopping-cart/EmptyCartNotification.tsx** → `next/navigation`
- **/home/ctp/Github/shuk-sham/components/dev/DevTools.tsx** → `react`
- **/home/ctp/Github/shuk-sham/components/dev/DevTools.tsx** → `@/contexts/DataContext`

### Context Providers

- **/home/ctp/Github/shuk-sham/contexts/AuthContext.tsx** → `react`
- **/home/ctp/Github/shuk-sham/contexts/AuthContext.tsx** → `@/lib/hooks/useUser`
- **/home/ctp/Github/shuk-sham/contexts/AuthContext.tsx** → `@/lib/utils/logger`
- **/home/ctp/Github/shuk-sham/contexts/CartContext.tsx** → `react`
- **/home/ctp/Github/shuk-sham/contexts/CartContext.tsx** → `@/lib/types/global`
- **/home/ctp/Github/shuk-sham/contexts/CartContext.tsx** → `@/lib/hooks`
- **/home/ctp/Github/shuk-sham/contexts/CartContext.tsx** → `@/components/actions/ConfirmationModal`
- **/home/ctp/Github/shuk-sham/contexts/CartContext.tsx** → `@/components/shopping-cart/EmptyCartNotification`
- **/home/ctp/Github/shuk-sham/contexts/CartContext.tsx** → `next/navigation`
- **/home/ctp/Github/shuk-sham/contexts/CartContext.tsx** → `./DealsContext`
- **/home/ctp/Github/shuk-sham/contexts/CartContext.tsx** → `@/lib/types/Deal`
- **/home/ctp/Github/shuk-sham/contexts/DataContext.tsx** → `react`
- **/home/ctp/Github/shuk-sham/contexts/DataContext.tsx** → `next/navigation`
- **/home/ctp/Github/shuk-sham/contexts/DataContext.tsx** → `@/lib/types/global`
- **/home/ctp/Github/shuk-sham/contexts/DataContext.tsx** → `@/components/actions/Loading`
- **/home/ctp/Github/shuk-sham/contexts/DataContext.tsx** → `@/lib/utils/logger`
- **/home/ctp/Github/shuk-sham/contexts/DataContext.tsx** → `@/lib/hooks`
- **/home/ctp/Github/shuk-sham/contexts/DataContext.tsx** → `@/components/actions/Error`
- **/home/ctp/Github/shuk-sham/contexts/DealsContext.tsx** → `react`
- **/home/ctp/Github/shuk-sham/contexts/DealsContext.tsx** → `@/lib/types/Deal`

### Utilities

- **/home/ctp/Github/shuk-sham/lib/siteConfig.ts** → `@/lib/types/global`
- **/home/ctp/Github/shuk-sham/lib/constants/swr.ts** → `swr`
- **/home/ctp/Github/shuk-sham/lib/constants/swr.ts** → `./cache`
- **/home/ctp/Github/shuk-sham/lib/hooks/createEntityHook.ts** → `swr`
- **/home/ctp/Github/shuk-sham/lib/hooks/createEntityHook.ts** → `@/lib/types/global`
- **/home/ctp/Github/shuk-sham/lib/hooks/createEntityHook.ts** → `@/lib/utils/api/fetchers`
- **/home/ctp/Github/shuk-sham/lib/hooks/createEntityHook.ts** → `@/lib/utils/logger`
- **/home/ctp/Github/shuk-sham/lib/hooks/createEntityHook.ts** → `@/lib/constants`
- **/home/ctp/Github/shuk-sham/lib/hooks/useCartDiscounts.ts** → `react`
- **/home/ctp/Github/shuk-sham/lib/hooks/useCartDiscounts.ts** → `@/lib/types/CartItem`
- **/home/ctp/Github/shuk-sham/lib/hooks/useCartDiscounts.ts** → `@/lib/types/Deal`
- **/home/ctp/Github/shuk-sham/lib/hooks/useCategories.ts** → `@/lib/types/global`
- **/home/ctp/Github/shuk-sham/lib/hooks/useCategories.ts** → `@/lib/utils/api/fetchers`
- **/home/ctp/Github/shuk-sham/lib/hooks/useCategories.ts** → `./createEntityHook`
- **/home/ctp/Github/shuk-sham/lib/hooks/useDealsDebug.ts** → `react`
- **/home/ctp/Github/shuk-sham/lib/hooks/useDealsDebug.ts** → `@/contexts/DealsContext`
- **/home/ctp/Github/shuk-sham/lib/hooks/useDragScroll.ts** → `react`
- **/home/ctp/Github/shuk-sham/lib/hooks/useFlashEffect.ts** → `react`
- **/home/ctp/Github/shuk-sham/lib/hooks/useHydration.ts** → `react`
- **/home/ctp/Github/shuk-sham/lib/hooks/useOrders.ts** → `swr`
- **/home/ctp/Github/shuk-sham/lib/hooks/useOrders.ts** → `@/lib/utils/api/fetchers`
- **/home/ctp/Github/shuk-sham/lib/hooks/useOrders.ts** → `@/lib/constants`
- **/home/ctp/Github/shuk-sham/lib/hooks/useOrders.ts** → `@/lib/types/global`
- **/home/ctp/Github/shuk-sham/lib/hooks/useProduct.ts** → `swr`
- **/home/ctp/Github/shuk-sham/lib/hooks/useProduct.ts** → `@/lib/types/global`
- **/home/ctp/Github/shuk-sham/lib/hooks/useProduct.ts** → `@/lib/utils/api/fetchers`
- **/home/ctp/Github/shuk-sham/lib/hooks/useProduct.ts** → `@/lib/constants`
- **/home/ctp/Github/shuk-sham/lib/hooks/useProduct.ts** → `@/lib/utils/logger`
- **/home/ctp/Github/shuk-sham/lib/hooks/useProducts.ts** → `@/lib/types/global`
- **/home/ctp/Github/shuk-sham/lib/hooks/useProducts.ts** → `@/lib/utils/api/fetchers`
- **/home/ctp/Github/shuk-sham/lib/hooks/useProducts.ts** → `./createEntityHook`
- **/home/ctp/Github/shuk-sham/lib/hooks/useUser.ts** → `swr`
- **/home/ctp/Github/shuk-sham/lib/hooks/useUser.ts** → `@/lib/types/global`
- **/home/ctp/Github/shuk-sham/lib/hooks/useUser.ts** → `@/lib/utils/api/fetchers`
- **/home/ctp/Github/shuk-sham/lib/hooks/useUser.ts** → `@/lib/constants`
- **/home/ctp/Github/shuk-sham/lib/hooks/useUser.ts** → `@/lib/utils/logger`
- **/home/ctp/Github/shuk-sham/lib/types/CartItem.ts** → `./Deal`
- **/home/ctp/Github/shuk-sham/lib/types/CartItem.ts** → `./global`
- **/home/ctp/Github/shuk-sham/lib/types/auth.ts** → `./global`
- **/home/ctp/Github/shuk-sham/lib/types/ui.ts** → `./global`
- **/home/ctp/Github/shuk-sham/lib/utils/cache-diagnostic.ts** → `./logger`
- **/home/ctp/Github/shuk-sham/lib/utils/cache-diagnostic.ts** → `./monitoring/cache-metrics`
- **/home/ctp/Github/shuk-sham/lib/utils/index.ts** → `./cache`
- **/home/ctp/Github/shuk-sham/lib/utils/index.ts** → `./product`
- **/home/ctp/Github/shuk-sham/lib/utils/auth/auth.ts** → `next/server`
- **/home/ctp/Github/shuk-sham/lib/utils/auth/index.ts** → `next/server`
- **/home/ctp/Github/shuk-sham/lib/utils/auth/wp-auth.ts** → `buffer`
- **/home/ctp/Github/shuk-sham/lib/utils/cache/index.ts** → `@/lib/utils/cache/constants`
- **/home/ctp/Github/shuk-sham/lib/utils/cache/redis.ts** → `ioredis`
- **/home/ctp/Github/shuk-sham/lib/utils/cache/redis.ts** → `@/lib/utils/logger`
- **/home/ctp/Github/shuk-sham/lib/utils/cache/redis.ts** → `@/lib/constants/cache`
- **/home/ctp/Github/shuk-sham/lib/utils/cache/redis.ts** → `@/lib/cache/memory-cache`
- **/home/ctp/Github/shuk-sham/lib/utils/cache/redis.ts** → `@/lib/utils/cache-diagnostic`
- **/home/ctp/Github/shuk-sham/lib/utils/cache/wp-cache.ts** → `@/lib/types/global`
- **/home/ctp/Github/shuk-sham/lib/utils/cache/wp-cache.ts** → `@/lib/utils/cache/index`
- **/home/ctp/Github/shuk-sham/lib/utils/cache/wp-cache.ts** → `@/lib/constants`
- **/home/ctp/Github/shuk-sham/lib/utils/cache/wp-cache.ts** → `@/lib/utils/cache/redis`
- **/home/ctp/Github/shuk-sham/lib/utils/cache/wp-cache.ts** → `@/lib/utils/logger`
- **/home/ctp/Github/shuk-sham/lib/utils/cache/wp-cache.ts** → `@/lib/utils/api/wp-api`
- **/home/ctp/Github/shuk-sham/lib/utils/cache/wp-cache.ts** → `@/app/api/[locale]/products/[id]/route`
- **/home/ctp/Github/shuk-sham/lib/utils/filter/index.ts** → `@/lib/types/global`
- **/home/ctp/Github/shuk-sham/lib/utils/monitoring/cache-metrics.ts** → `@/lib/utils/logger`
- **/home/ctp/Github/shuk-sham/lib/utils/monitoring/cache-metrics.ts** → `perf_hooks`
- **/home/ctp/Github/shuk-sham/lib/utils/product/index.ts** → `@/lib/types/global`
- **/home/ctp/Github/shuk-sham/lib/utils/product/index.ts** → `@/lib/types/Deal`

### Other

- **/home/ctp/Github/shuk-sham/middleware.ts** → `next-intl/middleware`
- **/home/ctp/Github/shuk-sham/middleware.ts** → `./i18n/routing`
- **/home/ctp/Github/shuk-sham/next.config.ts** → `next`
- **/home/ctp/Github/shuk-sham/next.config.ts** → `next-intl/plugin`
- **/home/ctp/Github/shuk-sham/tailwind.config.ts** → `tailwindcss`
- **/home/ctp/Github/shuk-sham/i18n/request.ts** → `next-intl/server`
- **/home/ctp/Github/shuk-sham/i18n/request.ts** → `./routing`
- **/home/ctp/Github/shuk-sham/i18n/routing.ts** → `next-intl/routing`
- **/home/ctp/Github/shuk-sham/i18n/routing.ts** → `next-intl/navigation`
- **/home/ctp/Github/shuk-sham/messages/orderConfirmation.ts** → `@/lib/types/messages`

## Context Flow

### Context Creators

- **UnnamedContext** is created by:
  - /home/ctp/Github/shuk-sham/contexts/AuthContext.tsx
  - /home/ctp/Github/shuk-sham/contexts/CartContext.tsx
  - /home/ctp/Github/shuk-sham/contexts/DataContext.tsx
  - /home/ctp/Github/shuk-sham/contexts/DealsContext.tsx

### Context Consumers

- **AuthContext** is used by:
  - /home/ctp/Github/shuk-sham/contexts/AuthContext.tsx
- **DealsContext** is used by:
  - /home/ctp/Github/shuk-sham/contexts/CartContext.tsx
  - /home/ctp/Github/shuk-sham/contexts/DealsContext.tsx
- **CartContext** is used by:
  - /home/ctp/Github/shuk-sham/contexts/CartContext.tsx
- **DataContext** is used by:
  - /home/ctp/Github/shuk-sham/contexts/DataContext.tsx

### Multi-Consumed Contexts

- **UnnamedContext** is consumed in 4 files:
  - /home/ctp/Github/shuk-sham/contexts/AuthContext.tsx
  - /home/ctp/Github/shuk-sham/contexts/CartContext.tsx
  - /home/ctp/Github/shuk-sham/contexts/DataContext.tsx
  - /home/ctp/Github/shuk-sham/contexts/DealsContext.tsx
- **DealsContext** is consumed in 2 files:
  - /home/ctp/Github/shuk-sham/contexts/CartContext.tsx
  - /home/ctp/Github/shuk-sham/contexts/DealsContext.tsx

## Props Flow

### Component Props

- **parseCacheHeaders** receives props from:
  - /home/ctp/Github/shuk-sham/test-cache.js ([object Object])
- **formatTime** receives props from:
  - /home/ctp/Github/shuk-sham/test-cache.js ([object Object])
- **fetchEndpoint** receives props from:
  - /home/ctp/Github/shuk-sham/test-cache.js ([object Object])
- **ConfirmationModal** receives props from:
  - /home/ctp/Github/shuk-sham/contexts/CartContext.tsx (isOpen, title, message, confirmText, cancelText, onConfirm, onCancel)
- **EmptyCartNotification** receives props from:
  - /home/ctp/Github/shuk-sham/contexts/CartContext.tsx (isOpen, onClose)
- **DataProvider** receives props from:
  - /home/ctp/Github/shuk-sham/contexts/DataContext.tsx ([object Object])
- **Error** receives props from:
  - /home/ctp/Github/shuk-sham/contexts/DataContext.tsx (message)
  - /home/ctp/Github/shuk-sham/components/actions/Error.tsx ([object Object])
- **Image** receives props from:
  - /home/ctp/Github/shuk-sham/components/CategorySelectionMain.tsx (src, alt, width, height, className, style)
  - /home/ctp/Github/shuk-sham/components/HeaderSearch.tsx (src, alt, fill, className)
  - /home/ctp/Github/shuk-sham/components/Hero.tsx (src, alt, fill, className, priority, sizes)
  - /home/ctp/Github/shuk-sham/components/Hero.tsx (src, alt, width, height, priority, className, onError)
  - /home/ctp/Github/shuk-sham/components/Hero.tsx (src, alt, width, height, className)
  - /home/ctp/Github/shuk-sham/components/Hero.tsx (src, alt, width, height, className)
  - /home/ctp/Github/shuk-sham/components/Hero.tsx (src, alt, width, height, className)
  - /home/ctp/Github/shuk-sham/components/ProductBadges.tsx (src, alt, width, height, className)
  - /home/ctp/Github/shuk-sham/components/ProductCard.tsx (src, alt, width, height, className)
  - /home/ctp/Github/shuk-sham/components/ProductQuickView.tsx (src, alt, width, height, className)
  - /home/ctp/Github/shuk-sham/components/ShoppingCart.tsx (src, alt, width, height, className)
  - /home/ctp/Github/shuk-sham/components/ShoppingCart.tsx (src, alt, width, height, className)
  - /home/ctp/Github/shuk-sham/components/ShoppingCart.tsx (src, alt, width, height, className)
  - /home/ctp/Github/shuk-sham/components/ShoppingCart.tsx (src, alt, width, height, className)
  - /home/ctp/Github/shuk-sham/components/ShoppingCart.tsx (src, alt, width, height, className)
  - /home/ctp/Github/shuk-sham/components/SingleProductView.tsx (src, alt, fill, className, sizes, priority)
  - /home/ctp/Github/shuk-sham/components/SingleProductView.tsx (src, alt, fill, className)
  - /home/ctp/Github/shuk-sham/components/actions/Menu.tsx (src, alt, width, height, className, onClick)
  - /home/ctp/Github/shuk-sham/components/actions/ProductSearchManager.tsx (src, alt, width, height, priority, className)
  - /home/ctp/Github/shuk-sham/components/actions/SearchResults.tsx (src, alt, fill, className, sizes)
  - /home/ctp/Github/shuk-sham/components/checkout/Checkout.tsx (src, alt, width, height, className)
  - /home/ctp/Github/shuk-sham/components/checkout/Checkout.tsx (src, alt, width, height, className)
  - /home/ctp/Github/shuk-sham/components/shopping-cart/CartCheck.tsx (src, alt, width, height, className)
  - /home/ctp/Github/shuk-sham/components/shopping-cart/CartCheck.tsx (src, alt, width, height, className)
  - /home/ctp/Github/shuk-sham/components/shopping-cart/CartCheck.tsx (src, alt, width, height, className)
  - /home/ctp/Github/shuk-sham/components/shopping-cart/CartCheck.tsx (src, alt, width, height, className)
  - /home/ctp/Github/shuk-sham/components/shopping-cart/CartCheck.tsx (src, alt, width, height, className)
- **ConditionalHero** receives props from:
  - /home/ctp/Github/shuk-sham/components/ConditionalHero.tsx ([object Object])
  - /home/ctp/Github/shuk-sham/app/[locale]/layout.tsx (messages)
- **Hero** receives props from:
  - /home/ctp/Github/shuk-sham/components/ConditionalHero.tsx (messages)
  - /home/ctp/Github/shuk-sham/components/Hero.tsx ([object Object])
- **ChevronLeft** receives props from:
  - /home/ctp/Github/shuk-sham/components/Header.tsx (className, color, strokeWidth)
  - /home/ctp/Github/shuk-sham/components/ProductsListMain.tsx (className)
  - /home/ctp/Github/shuk-sham/components/actions/Menu.tsx (className)
  - /home/ctp/Github/shuk-sham/components/actions/Menu.tsx (className)
  - /home/ctp/Github/shuk-sham/components/actions/Menu.tsx (className)
  - /home/ctp/Github/shuk-sham/components/actions/Menu.tsx (className)
  - /home/ctp/Github/shuk-sham/components/actions/Menu.tsx (className)
- **ProductSearchManager** receives props from:
  - /home/ctp/Github/shuk-sham/components/Header.tsx (isMainPage)
  - /home/ctp/Github/shuk-sham/components/actions/ProductSearchManager.tsx ([object Object])
- **Menu** receives props from:
  - /home/ctp/Github/shuk-sham/components/Header.tsx (setMenuOpened)
  - /home/ctp/Github/shuk-sham/components/actions/Menu.tsx ([object Object])
- **Link** receives props from:
  - /home/ctp/Github/shuk-sham/components/Hero.tsx (href, className)
  - /home/ctp/Github/shuk-sham/components/ProductBreadcrumb.tsx (href, className)
  - /home/ctp/Github/shuk-sham/components/ShoppingCart.tsx (href, className)
  - /home/ctp/Github/shuk-sham/components/actions/Menu.tsx (href)
  - /home/ctp/Github/shuk-sham/components/checkout/Checkout.tsx (href, className)
  - /home/ctp/Github/shuk-sham/components/shopping-cart/CartCheck.tsx (href, className)
  - /home/ctp/Github/shuk-sham/components/shopping-cart/CartCheck.tsx (href, className)
  - /home/ctp/Github/shuk-sham/app/[locale]/order-confirmation/page.tsx (href, className)
  - /home/ctp/Github/shuk-sham/app/[locale]/order-confirmation/page.tsx (href, className)
- **getMessages** receives props from:
  - /home/ctp/Github/shuk-sham/components/ProductCard.tsx ([object Object])
- **SaleRibbon** receives props from:
  - /home/ctp/Github/shuk-sham/components/ProductCard.tsx (typeLabel, dealTitle, isLastDay, className)
  - /home/ctp/Github/shuk-sham/components/ProductCard.tsx (saleInfo, className)
  - /home/ctp/Github/shuk-sham/components/SingleProductView.tsx (saleInfo, className, size)
- **ProductPageContent** receives props from:
  - /home/ctp/Github/shuk-sham/components/ProductPageContent.tsx ([object Object])
  - /home/ctp/Github/shuk-sham/app/[locale]/product/[id]/page.tsx (locale, productId)
- **SingleProductView** receives props from:
  - /home/ctp/Github/shuk-sham/components/ProductPageContent.tsx (locale, productId)
- **ProductQuickView** receives props from:
  - /home/ctp/Github/shuk-sham/components/ProductQuickView.tsx ([object Object])
  - /home/ctp/Github/shuk-sham/components/ProductsListMain.tsx (product, onClose)
  - /home/ctp/Github/shuk-sham/components/browse/BrowseViewMain.tsx (product, onClose)
- **ProductBadges** receives props from:
  - /home/ctp/Github/shuk-sham/components/ProductQuickView.tsx (dietaryFlags, size, className)
  - /home/ctp/Github/shuk-sham/components/SingleProductView.tsx (dietaryFlags, size, className)
- **ProductList** receives props from:
  - /home/ctp/Github/shuk-sham/components/ProductsListMain.tsx ([object Object])
  - /home/ctp/Github/shuk-sham/app/[locale]/page.tsx (title, filterType)
  - /home/ctp/Github/shuk-sham/app/[locale]/page.tsx (title, filterType)
  - /home/ctp/Github/shuk-sham/app/[locale]/cart-check/page.tsx (title, filterType)
- **getRandomProducts** receives props from:
  - /home/ctp/Github/shuk-sham/components/ProductsListMain.tsx ([object Object], [object Object])
- **ProductCard** receives props from:
  - /home/ctp/Github/shuk-sham/components/ProductsListMain.tsx (product)
  - /home/ctp/Github/shuk-sham/components/browse/ProductCardWrapper.tsx (product)
- **ChevronRight** receives props from:
  - /home/ctp/Github/shuk-sham/components/ProductsListMain.tsx (className)
- **SwipeToAction** receives props from:
  - /home/ctp/Github/shuk-sham/components/ShoppingCart.tsx (key, onComplete, actionText, direction, backgroundColor, textColor)
  - /home/ctp/Github/shuk-sham/components/actions/ConfirmationModal.tsx (onComplete, actionText, direction, backgroundColor, textColor, threshold, showShineEffect, useProgressOverlay, contentClassName)
  - /home/ctp/Github/shuk-sham/components/shopping-cart/CartButton.tsx (onComplete, actionText, direction, backgroundColor, textColor, threshold, useProgressOverlay, showShineEffect, alwaysShowShine, contentClassName, actionIcon, isCartButton)
  - /home/ctp/Github/shuk-sham/components/shopping-cart/CartButton.tsx (onComplete, actionText, direction, backgroundColor, textColor, threshold, useProgressOverlay, showShineEffect, alwaysShowShine, contentClassName, actionIcon, isCartButton)
  - /home/ctp/Github/shuk-sham/components/shopping-cart/CartButton.tsx (onComplete, actionText, direction, backgroundColor, textColor, threshold, useProgressOverlay, showShineEffect, alwaysShowShine, contentClassName, actionIcon, isCartButton)
  - /home/ctp/Github/shuk-sham/components/shopping-cart/CartCheck.tsx (key, onComplete, actionText, direction, backgroundColor, textColor)
- **ProductBreadcrumb** receives props from:
  - /home/ctp/Github/shuk-sham/components/SingleProductView.tsx (locale, category, productName)
- **ShareModal** receives props from:
  - /home/ctp/Github/shuk-sham/components/SingleProductView.tsx (isOpen, onClose, locale, shareUrl, shareTitle, shareText)
  - /home/ctp/Github/shuk-sham/components/actions/Menu.tsx (isOpen, onClose, locale, shareUrl, shareTitle, shareText)
  - /home/ctp/Github/shuk-sham/components/actions/ShareModal.tsx ([object Object])
- **PersonalInfo** receives props from:
  - /home/ctp/Github/shuk-sham/components/UserDashboard.tsx (userData)
- **OrderHistory** receives props from:
  - /home/ctp/Github/shuk-sham/components/UserDashboard.tsx (userId)
- **generateMetadata** receives props from:
  - /home/ctp/Github/shuk-sham/app/[locale]/layout.tsx ([object Object])
  - /home/ctp/Github/shuk-sham/app/[locale]/page.tsx ([object Object])
  - /home/ctp/Github/shuk-sham/app/[locale]/browse/page.tsx ([object Object])
  - /home/ctp/Github/shuk-sham/app/[locale]/product/[id]/page.tsx ([object Object])
- **LocaleLayout** receives props from:
  - /home/ctp/Github/shuk-sham/app/[locale]/layout.tsx ([object Object])
- **Script** receives props from:
  - /home/ctp/Github/shuk-sham/app/[locale]/layout.tsx (id, strategy)
- **NextIntlClientProvider** receives props from:
  - /home/ctp/Github/shuk-sham/app/[locale]/layout.tsx (messages)
- **SWRProvider** receives props from:
  - /home/ctp/Github/shuk-sham/app/[locale]/providers.tsx ([object Object])
- **SWRConfig** receives props from:
  - /home/ctp/Github/shuk-sham/app/[locale]/providers.tsx (value)
- **Providers** receives props from:
  - /home/ctp/Github/shuk-sham/app/[locale]/providers.tsx ([object Object])
- **RiUserLine** receives props from:
  - /home/ctp/Github/shuk-sham/components/auth/AuthButton.tsx (size)
- **UserAuthModal** receives props from:
  - /home/ctp/Github/shuk-sham/components/auth/AuthButton.tsx (isOpen, onClose, userData)
  - /home/ctp/Github/shuk-sham/components/actions/Menu.tsx (isOpen, onClose, userData)
  - /home/ctp/Github/shuk-sham/components/shopping-cart/CartButton.tsx (isOpen, onClose, userData)
  - /home/ctp/Github/shuk-sham/components/shopping-cart/CartCheck.tsx (onClose, isOpen)
- **RiCloseLine** receives props from:
  - /home/ctp/Github/shuk-sham/components/auth/UserAuthModal.tsx (size)
  - /home/ctp/Github/shuk-sham/components/auth/UserAuthModal.tsx (size)
- **RiUser3Line** receives props from:
  - /home/ctp/Github/shuk-sham/components/auth/UserAuthModal.tsx (size, className)
- **RiArrowLeftSLine** receives props from:
  - /home/ctp/Github/shuk-sham/components/auth/UserAuthModal.tsx (size, className)
- **RiLogoutBoxRLine** receives props from:
  - /home/ctp/Github/shuk-sham/components/auth/UserAuthModal.tsx (size, className)
- **HelpModal** receives props from:
  - /home/ctp/Github/shuk-sham/components/actions/HelpModal.tsx ([object Object])
  - /home/ctp/Github/shuk-sham/components/actions/Menu.tsx (isOpen, onClose, locale)
- **AddressModal** receives props from:
  - /home/ctp/Github/shuk-sham/components/actions/Menu.tsx (isOpen, onClose, onSave, initialData, locale)
  - /home/ctp/Github/shuk-sham/components/shopping-cart/AddressModal.tsx ([object Object])
  - /home/ctp/Github/shuk-sham/components/shopping-cart/CartCheck.tsx (isOpen, onClose, onSave, initialData, locale)
- **SearchResults** receives props from:
  - /home/ctp/Github/shuk-sham/components/actions/ProductSearchManager.tsx (results, isVisible, searchQuery, onClose, onProductSelect, locale)
- **ShineEffect** receives props from:
  - /home/ctp/Github/shuk-sham/components/actions/SwipeToAction.tsx (isActive, direction, alwaysShow, beamCount, beamWidth, containerClassName)
  - /home/ctp/Github/shuk-sham/components/actions/SwipeToAction.tsx (isActive, direction, alwaysShow, beamCount, beamWidth, containerClassName)
- **NoteModal** receives props from:
  - /home/ctp/Github/shuk-sham/components/actions/noteModal.tsx ([object Object])
  - /home/ctp/Github/shuk-sham/components/shopping-cart/CartCheck.tsx (isOpen, onClose, onSave, initialValue, locale, isReplaceModal)
  - /home/ctp/Github/shuk-sham/components/shopping-cart/CartCheck.tsx (isOpen, onClose, onSave, onRemove, initialValue, locale, isReplaceModal)
- **CategoryNavigation** receives props from:
  - /home/ctp/Github/shuk-sham/components/browse/BrowseViewMain.tsx (categories, selectedCategory, selectedSubCategory, activeCategoryName, onCategorySelect, onSubCategorySelect)
  - /home/ctp/Github/shuk-sham/components/browse/CategoryNavigationBar.tsx ([object Object])
- **ProductSection** receives props from:
  - /home/ctp/Github/shuk-sham/components/browse/BrowseViewMain.tsx (key, categoryId, categoryName, products, onProductClick, setRef)
  - /home/ctp/Github/shuk-sham/components/browse/ProductSection.tsx ([object Object])
- **ProductCardWrapper** receives props from:
  - /home/ctp/Github/shuk-sham/components/browse/ProductCardWrapper.tsx ([object Object])
  - /home/ctp/Github/shuk-sham/components/browse/ProductSection.tsx (key, product, onProductClick)
- **Checkout** receives props from:
  - /home/ctp/Github/shuk-sham/components/checkout/Checkout.tsx ([object Object])
  - /home/ctp/Github/shuk-sham/components/checkout/CheckoutModal.tsx (isModal, onModalClose, onOrderSuccess)
- **CheckoutModal** receives props from:
  - /home/ctp/Github/shuk-sham/components/checkout/CheckoutModal.tsx ([object Object])
  - /home/ctp/Github/shuk-sham/components/shopping-cart/CartButton.tsx (isOpen, onClose)
- **createEntityHook** receives props from:
  - /home/ctp/Github/shuk-sham/lib/hooks/createEntityHook.ts ([object Object], [object Object], [object Object])
- **useDragScroll** receives props from:
  - /home/ctp/Github/shuk-sham/lib/hooks/useDragScroll.ts ([object Object])
- **useFlashEffect** receives props from:
  - /home/ctp/Github/shuk-sham/lib/hooks/useFlashEffect.ts ([object Object])
- **useProduct** receives props from:
  - /home/ctp/Github/shuk-sham/lib/hooks/useProduct.ts ([object Object], [object Object], [object Object])
- **logCache** receives props from:
  - /home/ctp/Github/shuk-sham/lib/utils/cache-diagnostic.ts ([object Object])
- **getLayerSymbol** receives props from:
  - /home/ctp/Github/shuk-sham/lib/utils/cache-diagnostic.ts ([object Object])
- **getActionText** receives props from:
  - /home/ctp/Github/shuk-sham/lib/utils/cache-diagnostic.ts ([object Object])
- **formatCacheAge** receives props from:
  - /home/ctp/Github/shuk-sham/lib/utils/formatting.ts ([object Object])
  - /home/ctp/Github/shuk-sham/lib/utils/api/index.ts ([object Object])
  - /home/ctp/Github/shuk-sham/lib/utils/cache/index.ts ([object Object])
- **formatCacheTime** receives props from:
  - /home/ctp/Github/shuk-sham/lib/utils/formatting.ts ([object Object])
  - /home/ctp/Github/shuk-sham/lib/utils/cache/index.ts ([object Object])
- **formatHumanTime** receives props from:
  - /home/ctp/Github/shuk-sham/lib/utils/formatting.ts ([object Object])
  - /home/ctp/Github/shuk-sham/lib/utils/cache/index.ts ([object Object])
- **formatPrice** receives props from:
  - /home/ctp/Github/shuk-sham/lib/utils/formatting.ts ([object Object], [object Object])
- **Suspense** receives props from:
  - /home/ctp/Github/shuk-sham/app/[locale]/browse/page.tsx (fallback)
- **GET** receives props from:
  - /home/ctp/Github/shuk-sham/app/api/order/route.ts ([object Object])
  - /home/ctp/Github/shuk-sham/app/api/[locale]/category/route.ts ([object Object])
  - /home/ctp/Github/shuk-sham/app/api/[locale]/products/route.ts ([object Object])
  - /home/ctp/Github/shuk-sham/app/api/order/[id]/route.ts ([object Object])
  - /home/ctp/Github/shuk-sham/app/api/order/customer/route.ts ([object Object])
  - /home/ctp/Github/shuk-sham/app/api/users/[id]/route.ts ([object Object])
  - /home/ctp/Github/shuk-sham/app/api/users/me/route.ts ([object Object])
  - /home/ctp/Github/shuk-sham/app/api/[locale]/products/[id]/route.ts ([object Object])
  - /home/ctp/Github/shuk-sham/app/api/order/customer/[id]/route.ts ([object Object])
- **POST** receives props from:
  - /home/ctp/Github/shuk-sham/app/api/order/route.ts ([object Object])
  - /home/ctp/Github/shuk-sham/app/api/users/route.ts ([object Object])
  - /home/ctp/Github/shuk-sham/app/api/monitoring/metrics/route.ts ([object Object])
  - /home/ctp/Github/shuk-sham/app/api/users/logout/route.ts ([object Object])
  - /home/ctp/Github/shuk-sham/app/api/users/send-otp/route.ts ([object Object])
  - /home/ctp/Github/shuk-sham/app/api/users/verify-otp/route.ts ([object Object])
- **PUT** receives props from:
  - /home/ctp/Github/shuk-sham/app/api/users/route.ts ([object Object])
  - /home/ctp/Github/shuk-sham/app/api/order/[id]/route.ts ([object Object])
  - /home/ctp/Github/shuk-sham/app/api/users/[id]/route.ts ([object Object])
- **apiFetcher** receives props from:
  - /home/ctp/Github/shuk-sham/lib/utils/api/fetchers.ts ([object Object])
- **userFetcher** receives props from:
  - /home/ctp/Github/shuk-sham/lib/utils/api/fetchers.ts ([object Object])
- **productsFetcher** receives props from:
  - /home/ctp/Github/shuk-sham/lib/utils/api/fetchers.ts ([object Object])
- **productFetcher** receives props from:
  - /home/ctp/Github/shuk-sham/lib/utils/api/fetchers.ts ([object Object])
- **categoriesFetcher** receives props from:
  - /home/ctp/Github/shuk-sham/lib/utils/api/fetchers.ts ([object Object])
- **ordersFetcher** receives props from:
  - /home/ctp/Github/shuk-sham/lib/utils/api/fetchers.ts ([object Object])
- **isCacheValid** receives props from:
  - /home/ctp/Github/shuk-sham/lib/utils/api/user-api.ts ([object Object])
- **fetchCurrentUser** receives props from:
  - /home/ctp/Github/shuk-sham/lib/utils/api/user-api.ts ([object Object])
- **wpApiFetch** receives props from:
  - /home/ctp/Github/shuk-sham/lib/utils/api/wp-api.ts ([object Object], [object Object])
- **isAuthenticated** receives props from:
  - /home/ctp/Github/shuk-sham/lib/utils/auth/auth.ts ([object Object])
- **setAuthHeaders** receives props from:
  - /home/ctp/Github/shuk-sham/lib/utils/auth/auth.ts ([object Object], [object Object])
- **clearAuthCookies** receives props from:
  - /home/ctp/Github/shuk-sham/lib/utils/auth/auth.ts ([object Object])
- **safeCacheAge** receives props from:
  - /home/ctp/Github/shuk-sham/lib/utils/cache/index.ts ([object Object], [object Object])
- **calculateCachePercent** receives props from:
  - /home/ctp/Github/shuk-sham/lib/utils/cache/index.ts ([object Object], [object Object])
- **getCacheDiagnostics** receives props from:
  - /home/ctp/Github/shuk-sham/lib/utils/cache/index.ts ([object Object], [object Object], [object Object])
- **addCacheHeaders** receives props from:
  - /home/ctp/Github/shuk-sham/lib/utils/cache/index.ts ([object Object], [object Object], [object Object])
- **addDevelopmentCacheHeaders** receives props from:
  - /home/ctp/Github/shuk-sham/lib/utils/cache/index.ts ([object Object])
- **getFromCache** receives props from:
  - /home/ctp/Github/shuk-sham/lib/utils/cache/redis.ts ([object Object], [object Object])
- **setInCache** receives props from:
  - /home/ctp/Github/shuk-sham/lib/utils/cache/redis.ts ([object Object], [object Object], [object Object], [object Object])
- **deleteFromCache** receives props from:
  - /home/ctp/Github/shuk-sham/lib/utils/cache/redis.ts ([object Object], [object Object])
- **getCategoryCacheKey** receives props from:
  - /home/ctp/Github/shuk-sham/lib/utils/cache/redis.ts ([object Object])
- **getProductCacheKey** receives props from:
  - /home/ctp/Github/shuk-sham/lib/utils/cache/redis.ts ([object Object])
- **getUserCacheKey** receives props from:
  - /home/ctp/Github/shuk-sham/lib/utils/cache/redis.ts ([object Object])
- **transformCategories** receives props from:
  - /home/ctp/Github/shuk-sham/lib/utils/cache/wp-cache.ts ([object Object], [object Object])
- **getCategories** receives props from:
  - /home/ctp/Github/shuk-sham/lib/utils/cache/wp-cache.ts ([object Object])
- **getProducts** receives props from:
  - /home/ctp/Github/shuk-sham/lib/utils/cache/wp-cache.ts ([object Object], [object Object], [object Object])
- **paginateProducts** receives props from:
  - /home/ctp/Github/shuk-sham/lib/utils/cache/wp-cache.ts ([object Object], [object Object], [object Object])
- **preTransformProducts** receives props from:
  - /home/ctp/Github/shuk-sham/lib/utils/cache/wp-cache.ts ([object Object], [object Object])
- **setMetricsEnabled** receives props from:
  - /home/ctp/Github/shuk-sham/lib/utils/monitoring/cache-metrics.ts ([object Object])
- **trackCacheOperation** receives props from:
  - /home/ctp/Github/shuk-sham/lib/utils/monitoring/cache-metrics.ts ([object Object])
- **mapToObject** receives props from:
  - /home/ctp/Github/shuk-sham/lib/utils/monitoring/cache-metrics.ts ([object Object])
- **withCacheMetrics** receives props from:
  - /home/ctp/Github/shuk-sham/lib/utils/monitoring/cache-metrics.ts ([object Object], [object Object], [object Object])
- **Page** receives props from:
  - /home/ctp/Github/shuk-sham/app/[locale]/product/[id]/page.tsx ([object Object])
- **DELETE** receives props from:
  - /home/ctp/Github/shuk-sham/app/api/order/[id]/route.ts ([object Object])

### Components Passing Props

- **/home/ctp/Github/shuk-sham/test-cache.js** passes props to:
  - parseCacheHeaders ([object Object])
  - formatTime ([object Object])
  - fetchEndpoint ([object Object])
- **/home/ctp/Github/shuk-sham/contexts/CartContext.tsx** passes props to:
  - ConfirmationModal (isOpen, title, message, confirmText, cancelText, onConfirm, onCancel)
  - EmptyCartNotification (isOpen, onClose)
- **/home/ctp/Github/shuk-sham/contexts/DataContext.tsx** passes props to:
  - DataProvider ([object Object])
  - Error (message)
- **/home/ctp/Github/shuk-sham/components/CategorySelectionMain.tsx** passes props to:
  - Image (src, alt, width, height, className, style)
- **/home/ctp/Github/shuk-sham/components/ConditionalHero.tsx** passes props to:
  - ConditionalHero ([object Object])
  - Hero (messages)
- **/home/ctp/Github/shuk-sham/components/Header.tsx** passes props to:
  - ChevronLeft (className, color, strokeWidth)
  - ProductSearchManager (isMainPage)
  - Menu (setMenuOpened)
- **/home/ctp/Github/shuk-sham/components/HeaderSearch.tsx** passes props to:
  - Image (src, alt, fill, className)
- **/home/ctp/Github/shuk-sham/components/Hero.tsx** passes props to:
  - Hero ([object Object])
  - Link (href, className)
  - Image (src, alt, fill, className, priority, sizes)
  - Image (src, alt, width, height, priority, className, onError)
  - Image (src, alt, width, height, className)
  - Image (src, alt, width, height, className)
  - Image (src, alt, width, height, className)
- **/home/ctp/Github/shuk-sham/components/ProductBadges.tsx** passes props to:
  - Image (src, alt, width, height, className)
- **/home/ctp/Github/shuk-sham/components/ProductBreadcrumb.tsx** passes props to:
  - Link (href, className)
- **/home/ctp/Github/shuk-sham/components/ProductCard.tsx** passes props to:
  - getMessages ([object Object])
  - SaleRibbon (typeLabel, dealTitle, isLastDay, className)
  - SaleRibbon (saleInfo, className)
  - Image (src, alt, width, height, className)
- **/home/ctp/Github/shuk-sham/components/ProductPageContent.tsx** passes props to:
  - ProductPageContent ([object Object])
  - SingleProductView (locale, productId)
- **/home/ctp/Github/shuk-sham/components/ProductQuickView.tsx** passes props to:
  - ProductQuickView ([object Object])
  - Image (src, alt, width, height, className)
  - ProductBadges (dietaryFlags, size, className)
- **/home/ctp/Github/shuk-sham/components/ProductsListMain.tsx** passes props to:
  - ProductList ([object Object])
  - getRandomProducts ([object Object], [object Object])
  - ChevronLeft (className)
  - ProductCard (product)
  - ChevronRight (className)
  - ProductQuickView (product, onClose)
- **/home/ctp/Github/shuk-sham/components/ShoppingCart.tsx** passes props to:
  - Image (src, alt, width, height, className)
  - Image (src, alt, width, height, className)
  - Image (src, alt, width, height, className)
  - Image (src, alt, width, height, className)
  - Link (href, className)
  - SwipeToAction (key, onComplete, actionText, direction, backgroundColor, textColor)
  - Image (src, alt, width, height, className)
- **/home/ctp/Github/shuk-sham/components/SingleProductView.tsx** passes props to:
  - ProductBreadcrumb (locale, category, productName)
  - SaleRibbon (saleInfo, className, size)
  - Image (src, alt, fill, className, sizes, priority)
  - Image (src, alt, fill, className)
  - ProductBadges (dietaryFlags, size, className)
  - ShareModal (isOpen, onClose, locale, shareUrl, shareTitle, shareText)
- **/home/ctp/Github/shuk-sham/components/UserDashboard.tsx** passes props to:
  - PersonalInfo (userData)
  - OrderHistory (userId)
- **/home/ctp/Github/shuk-sham/app/[locale]/layout.tsx** passes props to:
  - generateMetadata ([object Object])
  - LocaleLayout ([object Object])
  - Script (id, strategy)
  - NextIntlClientProvider (messages)
  - ConditionalHero (messages)
- **/home/ctp/Github/shuk-sham/app/[locale]/page.tsx** passes props to:
  - generateMetadata ([object Object])
  - ProductList (title, filterType)
  - ProductList (title, filterType)
- **/home/ctp/Github/shuk-sham/app/[locale]/providers.tsx** passes props to:
  - SWRProvider ([object Object])
  - SWRConfig (value)
  - Providers ([object Object])
- **/home/ctp/Github/shuk-sham/components/auth/AuthButton.tsx** passes props to:
  - RiUserLine (size)
  - UserAuthModal (isOpen, onClose, userData)
- **/home/ctp/Github/shuk-sham/components/auth/UserAuthModal.tsx** passes props to:
  - RiCloseLine (size)
  - RiUser3Line (size, className)
  - RiArrowLeftSLine (size, className)
  - RiLogoutBoxRLine (size, className)
  - RiCloseLine (size)
- **/home/ctp/Github/shuk-sham/components/actions/ConfirmationModal.tsx** passes props to:
  - SwipeToAction (onComplete, actionText, direction, backgroundColor, textColor, threshold, showShineEffect, useProgressOverlay, contentClassName)
- **/home/ctp/Github/shuk-sham/components/actions/Error.tsx** passes props to:
  - Error ([object Object])
- **/home/ctp/Github/shuk-sham/components/actions/HelpModal.tsx** passes props to:
  - HelpModal ([object Object])
- **/home/ctp/Github/shuk-sham/components/actions/Menu.tsx** passes props to:
  - Menu ([object Object])
  - Link (href)
  - Image (src, alt, width, height, className, onClick)
  - ChevronLeft (className)
  - ChevronLeft (className)
  - ChevronLeft (className)
  - ChevronLeft (className)
  - ChevronLeft (className)
  - HelpModal (isOpen, onClose, locale)
  - AddressModal (isOpen, onClose, onSave, initialData, locale)
  - UserAuthModal (isOpen, onClose, userData)
  - ShareModal (isOpen, onClose, locale, shareUrl, shareTitle, shareText)
- **/home/ctp/Github/shuk-sham/components/actions/ProductSearchManager.tsx** passes props to:
  - ProductSearchManager ([object Object])
  - Image (src, alt, width, height, priority, className)
  - SearchResults (results, isVisible, searchQuery, onClose, onProductSelect, locale)
- **/home/ctp/Github/shuk-sham/components/actions/SearchResults.tsx** passes props to:
  - Image (src, alt, fill, className, sizes)
- **/home/ctp/Github/shuk-sham/components/actions/ShareModal.tsx** passes props to:
  - ShareModal ([object Object])
- **/home/ctp/Github/shuk-sham/components/actions/SwipeToAction.tsx** passes props to:
  - ShineEffect (isActive, direction, alwaysShow, beamCount, beamWidth, containerClassName)
  - ShineEffect (isActive, direction, alwaysShow, beamCount, beamWidth, containerClassName)
- **/home/ctp/Github/shuk-sham/components/actions/noteModal.tsx** passes props to:
  - NoteModal ([object Object])
- **/home/ctp/Github/shuk-sham/components/browse/BrowseViewMain.tsx** passes props to:
  - CategoryNavigation (categories, selectedCategory, selectedSubCategory, activeCategoryName, onCategorySelect, onSubCategorySelect)
  - ProductSection (key, categoryId, categoryName, products, onProductClick, setRef)
  - ProductQuickView (product, onClose)
- **/home/ctp/Github/shuk-sham/components/browse/CategoryNavigationBar.tsx** passes props to:
  - CategoryNavigation ([object Object])
- **/home/ctp/Github/shuk-sham/components/browse/ProductCardWrapper.tsx** passes props to:
  - ProductCardWrapper ([object Object])
  - ProductCard (product)
- **/home/ctp/Github/shuk-sham/components/browse/ProductSection.tsx** passes props to:
  - ProductSection ([object Object])
  - ProductCardWrapper (key, product, onProductClick)
- **/home/ctp/Github/shuk-sham/components/checkout/Checkout.tsx** passes props to:
  - Checkout ([object Object])
  - Link (href, className)
  - Image (src, alt, width, height, className)
  - Image (src, alt, width, height, className)
- **/home/ctp/Github/shuk-sham/components/checkout/CheckoutModal.tsx** passes props to:
  - CheckoutModal ([object Object])
  - Checkout (isModal, onModalClose, onOrderSuccess)
- **/home/ctp/Github/shuk-sham/components/shopping-cart/AddressModal.tsx** passes props to:
  - AddressModal ([object Object])
- **/home/ctp/Github/shuk-sham/components/shopping-cart/CartButton.tsx** passes props to:
  - SwipeToAction (onComplete, actionText, direction, backgroundColor, textColor, threshold, useProgressOverlay, showShineEffect, alwaysShowShine, contentClassName, actionIcon, isCartButton)
  - SwipeToAction (onComplete, actionText, direction, backgroundColor, textColor, threshold, useProgressOverlay, showShineEffect, alwaysShowShine, contentClassName, actionIcon, isCartButton)
  - SwipeToAction (onComplete, actionText, direction, backgroundColor, textColor, threshold, useProgressOverlay, showShineEffect, alwaysShowShine, contentClassName, actionIcon, isCartButton)
  - CheckoutModal (isOpen, onClose)
  - UserAuthModal (isOpen, onClose, userData)
- **/home/ctp/Github/shuk-sham/components/shopping-cart/CartCheck.tsx** passes props to:
  - Link (href, className)
  - UserAuthModal (onClose, isOpen)
  - AddressModal (isOpen, onClose, onSave, initialData, locale)
  - NoteModal (isOpen, onClose, onSave, initialValue, locale, isReplaceModal)
  - NoteModal (isOpen, onClose, onSave, onRemove, initialValue, locale, isReplaceModal)
  - Image (src, alt, width, height, className)
  - Image (src, alt, width, height, className)
  - Image (src, alt, width, height, className)
  - Image (src, alt, width, height, className)
  - Link (href, className)
  - SwipeToAction (key, onComplete, actionText, direction, backgroundColor, textColor)
  - Image (src, alt, width, height, className)
- **/home/ctp/Github/shuk-sham/lib/hooks/createEntityHook.ts** passes props to:
  - createEntityHook ([object Object], [object Object], [object Object])
- **/home/ctp/Github/shuk-sham/lib/hooks/useDragScroll.ts** passes props to:
  - useDragScroll ([object Object])
- **/home/ctp/Github/shuk-sham/lib/hooks/useFlashEffect.ts** passes props to:
  - useFlashEffect ([object Object])
- **/home/ctp/Github/shuk-sham/lib/hooks/useProduct.ts** passes props to:
  - useProduct ([object Object], [object Object], [object Object])
- **/home/ctp/Github/shuk-sham/lib/utils/cache-diagnostic.ts** passes props to:
  - logCache ([object Object])
  - getLayerSymbol ([object Object])
  - getActionText ([object Object])
- **/home/ctp/Github/shuk-sham/lib/utils/formatting.ts** passes props to:
  - formatCacheAge ([object Object])
  - formatCacheTime ([object Object])
  - formatHumanTime ([object Object])
  - formatPrice ([object Object], [object Object])
- **/home/ctp/Github/shuk-sham/app/[locale]/browse/page.tsx** passes props to:
  - generateMetadata ([object Object])
  - Suspense (fallback)
- **/home/ctp/Github/shuk-sham/app/[locale]/cart-check/page.tsx** passes props to:
  - ProductList (title, filterType)
- **/home/ctp/Github/shuk-sham/app/[locale]/order-confirmation/page.tsx** passes props to:
  - Link (href, className)
  - Link (href, className)
- **/home/ctp/Github/shuk-sham/app/api/order/route.ts** passes props to:
  - GET ([object Object])
  - POST ([object Object])
- **/home/ctp/Github/shuk-sham/app/api/users/route.ts** passes props to:
  - POST ([object Object])
  - PUT ([object Object])
- **/home/ctp/Github/shuk-sham/lib/utils/api/fetchers.ts** passes props to:
  - apiFetcher ([object Object])
  - userFetcher ([object Object])
  - productsFetcher ([object Object])
  - productFetcher ([object Object])
  - categoriesFetcher ([object Object])
  - ordersFetcher ([object Object])
- **/home/ctp/Github/shuk-sham/lib/utils/api/index.ts** passes props to:
  - formatCacheAge ([object Object])
- **/home/ctp/Github/shuk-sham/lib/utils/api/user-api.ts** passes props to:
  - isCacheValid ([object Object])
  - fetchCurrentUser ([object Object])
- **/home/ctp/Github/shuk-sham/lib/utils/api/wp-api.ts** passes props to:
  - wpApiFetch ([object Object], [object Object])
- **/home/ctp/Github/shuk-sham/lib/utils/auth/auth.ts** passes props to:
  - isAuthenticated ([object Object])
  - setAuthHeaders ([object Object], [object Object])
  - clearAuthCookies ([object Object])
- **/home/ctp/Github/shuk-sham/lib/utils/cache/index.ts** passes props to:
  - formatCacheAge ([object Object])
  - safeCacheAge ([object Object], [object Object])
  - formatCacheTime ([object Object])
  - formatHumanTime ([object Object])
  - calculateCachePercent ([object Object], [object Object])
  - getCacheDiagnostics ([object Object], [object Object], [object Object])
  - addCacheHeaders ([object Object], [object Object], [object Object])
  - addDevelopmentCacheHeaders ([object Object])
- **/home/ctp/Github/shuk-sham/lib/utils/cache/redis.ts** passes props to:
  - getFromCache ([object Object], [object Object])
  - setInCache ([object Object], [object Object], [object Object], [object Object])
  - deleteFromCache ([object Object], [object Object])
  - getCategoryCacheKey ([object Object])
  - getProductCacheKey ([object Object])
  - getUserCacheKey ([object Object])
- **/home/ctp/Github/shuk-sham/lib/utils/cache/wp-cache.ts** passes props to:
  - transformCategories ([object Object], [object Object])
  - getCategories ([object Object])
  - getProducts ([object Object], [object Object], [object Object])
  - paginateProducts ([object Object], [object Object], [object Object])
  - preTransformProducts ([object Object], [object Object])
- **/home/ctp/Github/shuk-sham/lib/utils/monitoring/cache-metrics.ts** passes props to:
  - setMetricsEnabled ([object Object])
  - trackCacheOperation ([object Object])
  - mapToObject ([object Object])
  - withCacheMetrics ([object Object], [object Object], [object Object])
- **/home/ctp/Github/shuk-sham/app/[locale]/product/[id]/page.tsx** passes props to:
  - generateMetadata ([object Object])
  - Page ([object Object])
  - ProductPageContent (locale, productId)
- **/home/ctp/Github/shuk-sham/app/api/[locale]/category/route.ts** passes props to:
  - GET ([object Object])
- **/home/ctp/Github/shuk-sham/app/api/[locale]/products/route.ts** passes props to:
  - GET ([object Object])
- **/home/ctp/Github/shuk-sham/app/api/monitoring/metrics/route.ts** passes props to:
  - POST ([object Object])
- **/home/ctp/Github/shuk-sham/app/api/order/[id]/route.ts** passes props to:
  - GET ([object Object])
  - PUT ([object Object])
  - DELETE ([object Object])
- **/home/ctp/Github/shuk-sham/app/api/order/customer/route.ts** passes props to:
  - GET ([object Object])
- **/home/ctp/Github/shuk-sham/app/api/users/[id]/route.ts** passes props to:
  - GET ([object Object])
  - PUT ([object Object])
- **/home/ctp/Github/shuk-sham/app/api/users/logout/route.ts** passes props to:
  - POST ([object Object])
- **/home/ctp/Github/shuk-sham/app/api/users/me/route.ts** passes props to:
  - GET ([object Object])
- **/home/ctp/Github/shuk-sham/app/api/users/send-otp/route.ts** passes props to:
  - POST ([object Object])
- **/home/ctp/Github/shuk-sham/app/api/users/verify-otp/route.ts** passes props to:
  - POST ([object Object])
- **/home/ctp/Github/shuk-sham/app/api/[locale]/products/[id]/route.ts** passes props to:
  - GET ([object Object])
- **/home/ctp/Github/shuk-sham/app/api/order/customer/[id]/route.ts** passes props to:
  - GET ([object Object])

### Multi-Consumed Props

- **Error** is consumed in 2 files:
  - /home/ctp/Github/shuk-sham/contexts/DataContext.tsx
  - /home/ctp/Github/shuk-sham/components/actions/Error.tsx
- **Image** is consumed in 13 files:
  - /home/ctp/Github/shuk-sham/components/CategorySelectionMain.tsx
  - /home/ctp/Github/shuk-sham/components/HeaderSearch.tsx
  - /home/ctp/Github/shuk-sham/components/Hero.tsx
  - /home/ctp/Github/shuk-sham/components/ProductBadges.tsx
  - /home/ctp/Github/shuk-sham/components/ProductCard.tsx
  - /home/ctp/Github/shuk-sham/components/ProductQuickView.tsx
  - /home/ctp/Github/shuk-sham/components/ShoppingCart.tsx
  - /home/ctp/Github/shuk-sham/components/SingleProductView.tsx
  - /home/ctp/Github/shuk-sham/components/actions/Menu.tsx
  - /home/ctp/Github/shuk-sham/components/actions/ProductSearchManager.tsx
  - /home/ctp/Github/shuk-sham/components/actions/SearchResults.tsx
  - /home/ctp/Github/shuk-sham/components/checkout/Checkout.tsx
  - /home/ctp/Github/shuk-sham/components/shopping-cart/CartCheck.tsx
- **ConditionalHero** is consumed in 2 files:
  - /home/ctp/Github/shuk-sham/components/ConditionalHero.tsx
  - /home/ctp/Github/shuk-sham/app/[locale]/layout.tsx
- **Hero** is consumed in 2 files:
  - /home/ctp/Github/shuk-sham/components/ConditionalHero.tsx
  - /home/ctp/Github/shuk-sham/components/Hero.tsx
- **ChevronLeft** is consumed in 3 files:
  - /home/ctp/Github/shuk-sham/components/Header.tsx
  - /home/ctp/Github/shuk-sham/components/ProductsListMain.tsx
  - /home/ctp/Github/shuk-sham/components/actions/Menu.tsx
- **ProductSearchManager** is consumed in 2 files:
  - /home/ctp/Github/shuk-sham/components/Header.tsx
  - /home/ctp/Github/shuk-sham/components/actions/ProductSearchManager.tsx
- **Menu** is consumed in 2 files:
  - /home/ctp/Github/shuk-sham/components/Header.tsx
  - /home/ctp/Github/shuk-sham/components/actions/Menu.tsx
- **Link** is consumed in 7 files:
  - /home/ctp/Github/shuk-sham/components/Hero.tsx
  - /home/ctp/Github/shuk-sham/components/ProductBreadcrumb.tsx
  - /home/ctp/Github/shuk-sham/components/ShoppingCart.tsx
  - /home/ctp/Github/shuk-sham/components/actions/Menu.tsx
  - /home/ctp/Github/shuk-sham/components/checkout/Checkout.tsx
  - /home/ctp/Github/shuk-sham/components/shopping-cart/CartCheck.tsx
  - /home/ctp/Github/shuk-sham/app/[locale]/order-confirmation/page.tsx
- **SaleRibbon** is consumed in 2 files:
  - /home/ctp/Github/shuk-sham/components/ProductCard.tsx
  - /home/ctp/Github/shuk-sham/components/SingleProductView.tsx
- **ProductPageContent** is consumed in 2 files:
  - /home/ctp/Github/shuk-sham/components/ProductPageContent.tsx
  - /home/ctp/Github/shuk-sham/app/[locale]/product/[id]/page.tsx
- **ProductQuickView** is consumed in 3 files:
  - /home/ctp/Github/shuk-sham/components/ProductQuickView.tsx
  - /home/ctp/Github/shuk-sham/components/ProductsListMain.tsx
  - /home/ctp/Github/shuk-sham/components/browse/BrowseViewMain.tsx
- **ProductBadges** is consumed in 2 files:
  - /home/ctp/Github/shuk-sham/components/ProductQuickView.tsx
  - /home/ctp/Github/shuk-sham/components/SingleProductView.tsx
- **ProductList** is consumed in 3 files:
  - /home/ctp/Github/shuk-sham/components/ProductsListMain.tsx
  - /home/ctp/Github/shuk-sham/app/[locale]/page.tsx
  - /home/ctp/Github/shuk-sham/app/[locale]/cart-check/page.tsx
- **ProductCard** is consumed in 2 files:
  - /home/ctp/Github/shuk-sham/components/ProductsListMain.tsx
  - /home/ctp/Github/shuk-sham/components/browse/ProductCardWrapper.tsx
- **SwipeToAction** is consumed in 4 files:
  - /home/ctp/Github/shuk-sham/components/ShoppingCart.tsx
  - /home/ctp/Github/shuk-sham/components/actions/ConfirmationModal.tsx
  - /home/ctp/Github/shuk-sham/components/shopping-cart/CartButton.tsx
  - /home/ctp/Github/shuk-sham/components/shopping-cart/CartCheck.tsx
- **ShareModal** is consumed in 3 files:
  - /home/ctp/Github/shuk-sham/components/SingleProductView.tsx
  - /home/ctp/Github/shuk-sham/components/actions/Menu.tsx
  - /home/ctp/Github/shuk-sham/components/actions/ShareModal.tsx
- **generateMetadata** is consumed in 4 files:
  - /home/ctp/Github/shuk-sham/app/[locale]/layout.tsx
  - /home/ctp/Github/shuk-sham/app/[locale]/page.tsx
  - /home/ctp/Github/shuk-sham/app/[locale]/browse/page.tsx
  - /home/ctp/Github/shuk-sham/app/[locale]/product/[id]/page.tsx
- **UserAuthModal** is consumed in 4 files:
  - /home/ctp/Github/shuk-sham/components/auth/AuthButton.tsx
  - /home/ctp/Github/shuk-sham/components/actions/Menu.tsx
  - /home/ctp/Github/shuk-sham/components/shopping-cart/CartButton.tsx
  - /home/ctp/Github/shuk-sham/components/shopping-cart/CartCheck.tsx
- **RiCloseLine** is consumed in 1 files:
  - /home/ctp/Github/shuk-sham/components/auth/UserAuthModal.tsx
- **HelpModal** is consumed in 2 files:
  - /home/ctp/Github/shuk-sham/components/actions/HelpModal.tsx
  - /home/ctp/Github/shuk-sham/components/actions/Menu.tsx
- **AddressModal** is consumed in 3 files:
  - /home/ctp/Github/shuk-sham/components/actions/Menu.tsx
  - /home/ctp/Github/shuk-sham/components/shopping-cart/AddressModal.tsx
  - /home/ctp/Github/shuk-sham/components/shopping-cart/CartCheck.tsx
- **ShineEffect** is consumed in 1 files:
  - /home/ctp/Github/shuk-sham/components/actions/SwipeToAction.tsx
- **NoteModal** is consumed in 2 files:
  - /home/ctp/Github/shuk-sham/components/actions/noteModal.tsx
  - /home/ctp/Github/shuk-sham/components/shopping-cart/CartCheck.tsx
- **CategoryNavigation** is consumed in 2 files:
  - /home/ctp/Github/shuk-sham/components/browse/BrowseViewMain.tsx
  - /home/ctp/Github/shuk-sham/components/browse/CategoryNavigationBar.tsx
- **ProductSection** is consumed in 2 files:
  - /home/ctp/Github/shuk-sham/components/browse/BrowseViewMain.tsx
  - /home/ctp/Github/shuk-sham/components/browse/ProductSection.tsx
- **ProductCardWrapper** is consumed in 2 files:
  - /home/ctp/Github/shuk-sham/components/browse/ProductCardWrapper.tsx
  - /home/ctp/Github/shuk-sham/components/browse/ProductSection.tsx
- **Checkout** is consumed in 2 files:
  - /home/ctp/Github/shuk-sham/components/checkout/Checkout.tsx
  - /home/ctp/Github/shuk-sham/components/checkout/CheckoutModal.tsx
- **CheckoutModal** is consumed in 2 files:
  - /home/ctp/Github/shuk-sham/components/checkout/CheckoutModal.tsx
  - /home/ctp/Github/shuk-sham/components/shopping-cart/CartButton.tsx
- **formatCacheAge** is consumed in 3 files:
  - /home/ctp/Github/shuk-sham/lib/utils/formatting.ts
  - /home/ctp/Github/shuk-sham/lib/utils/api/index.ts
  - /home/ctp/Github/shuk-sham/lib/utils/cache/index.ts
- **formatCacheTime** is consumed in 2 files:
  - /home/ctp/Github/shuk-sham/lib/utils/formatting.ts
  - /home/ctp/Github/shuk-sham/lib/utils/cache/index.ts
- **formatHumanTime** is consumed in 2 files:
  - /home/ctp/Github/shuk-sham/lib/utils/formatting.ts
  - /home/ctp/Github/shuk-sham/lib/utils/cache/index.ts
- **GET** is consumed in 9 files:
  - /home/ctp/Github/shuk-sham/app/api/order/route.ts
  - /home/ctp/Github/shuk-sham/app/api/[locale]/category/route.ts
  - /home/ctp/Github/shuk-sham/app/api/[locale]/products/route.ts
  - /home/ctp/Github/shuk-sham/app/api/order/[id]/route.ts
  - /home/ctp/Github/shuk-sham/app/api/order/customer/route.ts
  - /home/ctp/Github/shuk-sham/app/api/users/[id]/route.ts
  - /home/ctp/Github/shuk-sham/app/api/users/me/route.ts
  - /home/ctp/Github/shuk-sham/app/api/[locale]/products/[id]/route.ts
  - /home/ctp/Github/shuk-sham/app/api/order/customer/[id]/route.ts
- **POST** is consumed in 6 files:
  - /home/ctp/Github/shuk-sham/app/api/order/route.ts
  - /home/ctp/Github/shuk-sham/app/api/users/route.ts
  - /home/ctp/Github/shuk-sham/app/api/monitoring/metrics/route.ts
  - /home/ctp/Github/shuk-sham/app/api/users/logout/route.ts
  - /home/ctp/Github/shuk-sham/app/api/users/send-otp/route.ts
  - /home/ctp/Github/shuk-sham/app/api/users/verify-otp/route.ts
- **PUT** is consumed in 3 files:
  - /home/ctp/Github/shuk-sham/app/api/users/route.ts
  - /home/ctp/Github/shuk-sham/app/api/order/[id]/route.ts
  - /home/ctp/Github/shuk-sham/app/api/users/[id]/route.ts

## Map Operations

- **items** is mapped in:
  - /home/ctp/Github/shuk-sham/contexts/CartContext.tsx
- **prevCart** is mapped in:
  - /home/ctp/Github/shuk-sham/contexts/CartContext.tsx
- **prev** is mapped in:
  - /home/ctp/Github/shuk-sham/contexts/CartContext.tsx
- **cartItems** is mapped in:
  - /home/ctp/Github/shuk-sham/contexts/CartContext.tsx
  - /home/ctp/Github/shuk-sham/components/ShoppingCart.tsx
  - /home/ctp/Github/shuk-sham/components/debug/DealsDebugPanel.tsx
  - /home/ctp/Github/shuk-sham/components/checkout/Checkout.tsx
  - /home/ctp/Github/shuk-sham/components/shopping-cart/CartCheck.tsx
- **dealsArray** is mapped in:
  - /home/ctp/Github/shuk-sham/contexts/DealsContext.tsx
- **filteredCategories** is mapped in:
  - /home/ctp/Github/shuk-sham/components/CategorySelectionMain.tsx
- **dietaryFlags** is mapped in:
  - /home/ctp/Github/shuk-sham/components/HeaderSearch.tsx
  - /home/ctp/Github/shuk-sham/components/ProductBadges.tsx
- **searchResults** is mapped in:
  - /home/ctp/Github/shuk-sham/components/HeaderSearch.tsx
- **displayProducts** is mapped in:
  - /home/ctp/Github/shuk-sham/components/ProductsListMain.tsx
- **containsList** is mapped in:
  - /home/ctp/Github/shuk-sham/components/SingleProductView.tsx
- **mayContainList** is mapped in:
  - /home/ctp/Github/shuk-sham/components/SingleProductView.tsx
- **orders** is mapped in:
  - /home/ctp/Github/shuk-sham/components/UserProfile/OrderHistory.tsx
- **results** is mapped in:
  - /home/ctp/Github/shuk-sham/components/actions/SearchResults.tsx
- **sortedMainCategories** is mapped in:
  - /home/ctp/Github/shuk-sham/components/browse/CategoryNavigationBar.tsx
- **visibleProducts** is mapped in:
  - /home/ctp/Github/shuk-sham/components/browse/ProductSection.tsx
- **itemsWithThisDeal** is mapped in:
  - /home/ctp/Github/shuk-sham/components/debug/DealsDebugPanel.tsx
- **deals** is mapped in:
  - /home/ctp/Github/shuk-sham/components/debug/DealsDebugPanel.tsx
- **allDealsToShow** is mapped in:
  - /home/ctp/Github/shuk-sham/components/debug/DealsDebugPanel.tsx
- **allProducts** is mapped in:
  - /home/ctp/Github/shuk-sham/lib/utils/api/wp-api.ts
- **existingLineItems** is mapped in:
  - /home/ctp/Github/shuk-sham/app/api/order/[id]/route.ts
- **line_items** is mapped in:
  - /home/ctp/Github/shuk-sham/app/api/order/[id]/route.ts

