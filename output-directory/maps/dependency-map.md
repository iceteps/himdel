# Dependency Map

```mermaid
%%{init: {"theme": "default", "flowchart": {"htmlLabels": true, "curve": "basis"}}}%%
flowchart LR
  %% Style definitions
  classDef component fill:#e1f5fe,stroke:#0288d1,color:#01579b,stroke-width:2px
  classDef context fill:#fff9c4,stroke:#fbc02d,color:#f57f17,stroke-width:2px
  classDef object fill:#e8f5e9,stroke:#43a047,color:#1b5e20,stroke-width:1px
  classDef array fill:#f3e5f5,stroke:#8e24aa,color:#4a148c,stroke-width:1px
  classDef map fill:#ffebee,stroke:#e53935,color:#b71c1c,stroke-width:1px
  classDef multiConsumer fill:#ede7f6,stroke:#673ab7,color:#311b92,stroke-width:3px
  classDef provider fill:#e8f5e9,stroke:#43a047,color:#1b5e20,stroke-width:2px,stroke-dasharray:5,5
  classDef hook fill:#bbdefb,stroke:#1976d2,color:#0d47a1,stroke-width:1px
  classDef prop fill:#e1f5fe,stroke:#0288d1,color:#01579b,stroke-width:1px,stroke-dasharray:3,3

  subgraph Components
    subgraph contexts_components["contexts"]
  authcontext["<div title="Component: AuthContext
File: /home/ctp/Github/shuk-sham/contexts/AuthContext.tsx
Props: 0
Contexts Used: 0"><b>AuthContext</b>
(Props: 0)</div>"]:::component
  cartcontext["<div title="Component: CartContext
File: /home/ctp/Github/shuk-sham/contexts/CartContext.tsx
Props: 0
Contexts Used: 0"><b>CartContext</b>
(Props: 0)</div>"]:::component
  datacontext["<div title="Component: DataContext
File: /home/ctp/Github/shuk-sham/contexts/DataContext.tsx
Props: 0
Contexts Used: 0"><b>DataContext</b>
(Props: 0)</div>"]:::component
  dealscontext["<div title="Component: DealsContext
File: /home/ctp/Github/shuk-sham/contexts/DealsContext.tsx
Props: 0
Contexts Used: 0"><b>DealsContext</b>
(Props: 0)</div>"]:::component
    end
    subgraph components_components["components"]
  backgroundfetcher["<div title="Component: BackgroundFetcher
File: /home/ctp/Github/shuk-sham/components/BackgroundFetcher.tsx
Props: 0
Contexts Used: 0"><b>BackgroundFetcher</b>
(Props: 0)</div>"]:::component
  browseviewwrapper["<div title="Component: BrowseViewWrapper
File: /home/ctp/Github/shuk-sham/components/BrowseViewWrapper.tsx
Props: 0
Contexts Used: 0"><b>BrowseViewWrapper</b>
(Props: 0)</div>"]:::component
  categoryselectionmain["<div title="Component: CategorySelectionMain
File: /home/ctp/Github/shuk-sham/components/CategorySelectionMain.tsx
Props: 0
Contexts Used: 0"><b>CategorySelectionMain</b>
(Props: 0)</div>"]:::component
  conditionalhero["<div title="Component: ConditionalHero
File: /home/ctp/Github/shuk-sham/components/ConditionalHero.tsx
Props: 2
Contexts Used: 0"><b>ConditionalHero</b>
(Props: 2)</div>"]:::component
  header["<div title="Component: Header
File: /home/ctp/Github/shuk-sham/components/Header.tsx
Props: 0
Contexts Used: 0"><b>Header</b>
(Props: 0)</div>"]:::component
  headersearch["<div title="Component: HeaderSearch
File: /home/ctp/Github/shuk-sham/components/HeaderSearch.tsx
Props: 0
Contexts Used: 0"><b>HeaderSearch</b>
(Props: 0)</div>"]:::component
  hero["<div title="Component: Hero
File: /home/ctp/Github/shuk-sham/components/Hero.tsx
Props: 2
Contexts Used: 0"><b>Hero</b>
(Props: 2)</div>"]:::component
  productbadges["<div title="Component: ProductBadges
File: /home/ctp/Github/shuk-sham/components/ProductBadges.tsx
Props: 2
Contexts Used: 0"><b>ProductBadges</b>
(Props: 2)</div>"]:::component
  productbreadcrumb["<div title="Component: ProductBreadcrumb
File: /home/ctp/Github/shuk-sham/components/ProductBreadcrumb.tsx
Props: 1
Contexts Used: 0"><b>ProductBreadcrumb</b>
(Props: 1)</div>"]:::component
  productcard["<div title="Component: ProductCard
File: /home/ctp/Github/shuk-sham/components/ProductCard.tsx
Props: 2
Contexts Used: 0"><b>ProductCard</b>
(Props: 2)</div>"]:::component
  productpagecontent["<div title="Component: ProductPageContent
File: /home/ctp/Github/shuk-sham/components/ProductPageContent.tsx
Props: 2
Contexts Used: 0"><b>ProductPageContent</b>
(Props: 2)</div>"]:::component
  productquickview["<div title="Component: ProductQuickView
File: /home/ctp/Github/shuk-sham/components/ProductQuickView.tsx
Props: 3
Contexts Used: 0"><b>ProductQuickView</b>
(Props: 3)</div>"]:::component
  productslistmain["<div title="Component: ProductsListMain
File: /home/ctp/Github/shuk-sham/components/ProductsListMain.tsx
Props: 0
Contexts Used: 0"><b>ProductsListMain</b>
(Props: 0)</div>"]:::component
  saleribbon["<div title="Component: SaleRibbon
File: /home/ctp/Github/shuk-sham/components/SaleRibbon.tsx
Props: 3
Contexts Used: 0"><b>SaleRibbon</b>
(Props: 3)</div>"]:::component
  shoppingcart["<div title="Component: ShoppingCart
File: /home/ctp/Github/shuk-sham/components/ShoppingCart.tsx
Props: 0
Contexts Used: 0"><b>ShoppingCart</b>
(Props: 0)</div>"]:::component
  singleproductview["<div title="Component: SingleProductView
File: /home/ctp/Github/shuk-sham/components/SingleProductView.tsx
Props: 1
Contexts Used: 0"><b>SingleProductView</b>
(Props: 1)</div>"]:::component
  userdashboard["<div title="Component: UserDashboard
File: /home/ctp/Github/shuk-sham/components/UserDashboard.tsx
Props: 0
Contexts Used: 0"><b>UserDashboard</b>
(Props: 0)</div>"]:::component
    end
    subgraph _locale__components["[locale]"]
  layout["<div title="Component: layout
File: /home/ctp/Github/shuk-sham/app/[locale]/layout.tsx
Props: 0
Contexts Used: 0"><b>layout</b>
(Props: 0)</div>"]:::component
  not_found["<div title="Component: not-found
File: /home/ctp/Github/shuk-sham/app/[locale]/not-found.tsx
Props: 0
Contexts Used: 0"><b>not-found</b>
(Props: 0)</div>"]:::component
  page["<div title="Component: page
File: /home/ctp/Github/shuk-sham/app/[locale]/page.tsx
Props: 0
Contexts Used: 0"><b>page</b>
(Props: 0)</div>"]:::component
  providers["<div title="Component: providers
File: /home/ctp/Github/shuk-sham/app/[locale]/providers.tsx
Props: 0
Contexts Used: 0"><b>providers</b>
(Props: 0)</div>"]:::component
    end
    subgraph userprofile_components["UserProfile"]
  orderhistory["<div title="Component: OrderHistory
File: /home/ctp/Github/shuk-sham/components/UserProfile/OrderHistory.tsx
Props: 1
Contexts Used: 0"><b>OrderHistory</b>
(Props: 1)</div>"]:::component
  personalinfo["<div title="Component: PersonalInfo
File: /home/ctp/Github/shuk-sham/components/UserProfile/PersonalInfo.tsx
Props: 1
Contexts Used: 0"><b>PersonalInfo</b>
(Props: 1)</div>"]:::component
    end
    subgraph actions_components["actions"]
  confirmationmodal["<div title="Component: ConfirmationModal
File: /home/ctp/Github/shuk-sham/components/actions/ConfirmationModal.tsx
Props: 1
Contexts Used: 0"><b>ConfirmationModal</b>
(Props: 1)</div>"]:::component
  emptycartnotification["<div title="Component: EmptyCartNotification
File: /home/ctp/Github/shuk-sham/components/actions/EmptyCartNotification.tsx
Props: 1
Contexts Used: 0"><b>EmptyCartNotification</b>
(Props: 1)</div>"]:::component
  helpmodal["<div title="Component: HelpModal
File: /home/ctp/Github/shuk-sham/components/actions/HelpModal.tsx
Props: 2
Contexts Used: 0"><b>HelpModal</b>
(Props: 2)</div>"]:::component
  menu["<div title="Component: Menu
File: /home/ctp/Github/shuk-sham/components/actions/Menu.tsx
Props: 2
Contexts Used: 0"><b>Menu</b>
(Props: 2)</div>"]:::component
  productsearchmanager["<div title="Component: ProductSearchManager
File: /home/ctp/Github/shuk-sham/components/actions/ProductSearchManager.tsx
Props: 2
Contexts Used: 0"><b>ProductSearchManager</b>
(Props: 2)</div>"]:::component
  searchresults["<div title="Component: SearchResults
File: /home/ctp/Github/shuk-sham/components/actions/SearchResults.tsx
Props: 1
Contexts Used: 0"><b>SearchResults</b>
(Props: 1)</div>"]:::component
  sharemodal["<div title="Component: ShareModal
File: /home/ctp/Github/shuk-sham/components/actions/ShareModal.tsx
Props: 3
Contexts Used: 0"><b>ShareModal</b>
(Props: 3)</div>"]:::component
  shineeffect["<div title="Component: ShineEffect
File: /home/ctp/Github/shuk-sham/components/actions/ShineEffect.tsx
Props: 2
Contexts Used: 0"><b>ShineEffect</b>
(Props: 2)</div>"]:::component
  swipetoaction["<div title="Component: SwipeToAction
File: /home/ctp/Github/shuk-sham/components/actions/SwipeToAction.tsx
Props: 6
Contexts Used: 0"><b>SwipeToAction</b>
(Props: 6)</div>"]:::component
  notemodal["<div title="Component: noteModal
File: /home/ctp/Github/shuk-sham/components/actions/noteModal.tsx
Props: 0
Contexts Used: 0"><b>noteModal</b>
(Props: 0)</div>"]:::component
    end
    subgraph auth_components["auth"]
  authbutton["<div title="Component: AuthButton
File: /home/ctp/Github/shuk-sham/components/auth/AuthButton.tsx
Props: 0
Contexts Used: 0"><b>AuthButton</b>
(Props: 0)</div>"]:::component
  userauthmodal["<div title="Component: UserAuthModal
File: /home/ctp/Github/shuk-sham/components/auth/UserAuthModal.tsx
Props: 4
Contexts Used: 0"><b>UserAuthModal</b>
(Props: 4)</div>"]:::component
    end
    subgraph checkout_components["checkout"]
  checkout["<div title="Component: Checkout
File: /home/ctp/Github/shuk-sham/components/checkout/Checkout.tsx
Props: 2
Contexts Used: 0"><b>Checkout</b>
(Props: 2)</div>"]:::component
  checkoutmodal["<div title="Component: CheckoutModal
File: /home/ctp/Github/shuk-sham/components/checkout/CheckoutModal.tsx
Props: 2
Contexts Used: 0"><b>CheckoutModal</b>
(Props: 2)</div>"]:::component
    end
    subgraph browse_components["browse"]
  browseviewmain["<div title="Component: BrowseViewMain
File: /home/ctp/Github/shuk-sham/components/browse/BrowseViewMain.tsx
Props: 0
Contexts Used: 0"><b>BrowseViewMain</b>
(Props: 0)</div>"]:::component
  categorynavigationbar["<div title="Component: CategoryNavigationBar
File: /home/ctp/Github/shuk-sham/components/browse/CategoryNavigationBar.tsx
Props: 0
Contexts Used: 0"><b>CategoryNavigationBar</b>
(Props: 0)</div>"]:::component
  productcardwrapper["<div title="Component: ProductCardWrapper
File: /home/ctp/Github/shuk-sham/components/browse/ProductCardWrapper.tsx
Props: 2
Contexts Used: 0"><b>ProductCardWrapper</b>
(Props: 2)</div>"]:::component
  productsection["<div title="Component: ProductSection
File: /home/ctp/Github/shuk-sham/components/browse/ProductSection.tsx
Props: 2
Contexts Used: 0"><b>ProductSection</b>
(Props: 2)</div>"]:::component
    end
    subgraph debug_components["debug"]
  dealsdebugpanel["<div title="Component: DealsDebugPanel
File: /home/ctp/Github/shuk-sham/components/debug/DealsDebugPanel.tsx
Props: 0
Contexts Used: 0"><b>DealsDebugPanel</b>
(Props: 0)</div>"]:::component
    end
    subgraph dev_components["dev"]
  devtools["<div title="Component: DevTools
File: /home/ctp/Github/shuk-sham/components/dev/DevTools.tsx
Props: 0
Contexts Used: 0"><b>DevTools</b>
(Props: 0)</div>"]:::component
    end
    subgraph shopping_cart_components["shopping-cart"]
  addressmodal["<div title="Component: AddressModal
File: /home/ctp/Github/shuk-sham/components/shopping-cart/AddressModal.tsx
Props: 3
Contexts Used: 0"><b>AddressModal</b>
(Props: 3)</div>"]:::component
  cartbutton["<div title="Component: CartButton
File: /home/ctp/Github/shuk-sham/components/shopping-cart/CartButton.tsx
Props: 0
Contexts Used: 0"><b>CartButton</b>
(Props: 0)</div>"]:::component
  cartcheck["<div title="Component: CartCheck
File: /home/ctp/Github/shuk-sham/components/shopping-cart/CartCheck.tsx
Props: 0
Contexts Used: 0"><b>CartCheck</b>
(Props: 0)</div>"]:::component
  cartstatepersistencehandler["<div title="Component: CartStatePersistenceHandler
File: /home/ctp/Github/shuk-sham/components/shopping-cart/CartStatePersistenceHandler.tsx
Props: 0
Contexts Used: 0"><b>CartStatePersistenceHandler</b>
(Props: 0)</div>"]:::component
    end
    subgraph browse_components["browse"]
    end
    subgraph order_confirmation_components["order-confirmation"]
    end
    subgraph user_dashboard_components["user-dashboard"]
    end
    subgraph cart_check_components["cart-check"]
    end
    subgraph _id__components["[id]"]
    end
  end

  subgraph Contexts
  unnamedcontext["<div title="Context: UnnamedContext
Type: undefined
Created in: /home/ctp/Github/shuk-sham/contexts/AuthContext.tsx, /home/ctp/Github/shuk-sham/contexts/CartContext.tsx, /home/ctp/Github/shuk-sham/contexts/DataContext.tsx, /home/ctp/Github/shuk-sham/contexts/DealsContext.tsx
Consumed by: "><b>Context:</b> UnnamedContext
(0 consumers)
Initial: undefined</div>"]:::context
  end

  subgraph SharedProps["Shared Props"]
  prop_error["<div title="Prop: Error
Consumers: 2
Used in: /home/ctp/Github/shuk-sham/contexts/DataContext.tsx, /home/ctp/Github/shuk-sham/components/actions/Error.tsx"><b>Prop:</b> Error
(Used 2×)
(DataContext, Error)</div>"]:::multiConsumer
  prop_image["<div title="Prop: Image
Consumers: 13
Used in: /home/ctp/Github/shuk-sham/components/CategorySelectionMain.tsx, /home/ctp/Github/shuk-sham/components/HeaderSearch.tsx, /home/ctp/Github/shuk-sham/components/Hero.tsx, /home/ctp/Github/shuk-sham/components/ProductBadges.tsx, /home/ctp/Github/shuk-sham/components/ProductCard.tsx, /home/ctp/Github/shuk-sham/components/ProductQuickView.tsx, /home/ctp/Github/shuk-sham/components/ShoppingCart.tsx, /home/ctp/Github/shuk-sham/components/SingleProductView.tsx, /home/ctp/Github/shuk-sham/components/actions/Menu.tsx, /home/ctp/Github/shuk-sham/components/actions/ProductSearchManager.tsx, /home/ctp/Github/shuk-sham/components/actions/SearchResults.tsx, /home/ctp/Github/shuk-sham/components/checkout/Checkout.tsx, /home/ctp/Github/shuk-sham/components/shopping-cart/CartCheck.tsx"><b>Prop:</b> Image
(Used 13×)
(CategorySelectionMain, HeaderSearch, Hero, ...)</div>"]:::multiConsumer
  prop_conditionalhero["<div title="Prop: ConditionalHero
Consumers: 2
Used in: /home/ctp/Github/shuk-sham/components/ConditionalHero.tsx, /home/ctp/Github/shuk-sham/app/[locale]/layout.tsx"><b>Prop:</b> ConditionalHero
(Used 2×)
(ConditionalHero, layout)</div>"]:::multiConsumer
  prop_hero["<div title="Prop: Hero
Consumers: 2
Used in: /home/ctp/Github/shuk-sham/components/ConditionalHero.tsx, /home/ctp/Github/shuk-sham/components/Hero.tsx"><b>Prop:</b> Hero
(Used 2×)
(ConditionalHero, Hero)</div>"]:::multiConsumer
  prop_chevronleft["<div title="Prop: ChevronLeft
Consumers: 3
Used in: /home/ctp/Github/shuk-sham/components/Header.tsx, /home/ctp/Github/shuk-sham/components/ProductsListMain.tsx, /home/ctp/Github/shuk-sham/components/actions/Menu.tsx"><b>Prop:</b> ChevronLeft
(Used 3×)
(Header, ProductsListMain, Menu)</div>"]:::multiConsumer
  prop_productsearchmanager["<div title="Prop: ProductSearchManager
Consumers: 2
Used in: /home/ctp/Github/shuk-sham/components/Header.tsx, /home/ctp/Github/shuk-sham/components/actions/ProductSearchManager.tsx"><b>Prop:</b> ProductSearchManager
(Used 2×)
(Header, ProductSearchManager)</div>"]:::multiConsumer
  prop_menu["<div title="Prop: Menu
Consumers: 2
Used in: /home/ctp/Github/shuk-sham/components/Header.tsx, /home/ctp/Github/shuk-sham/components/actions/Menu.tsx"><b>Prop:</b> Menu
(Used 2×)
(Header, Menu)</div>"]:::multiConsumer
  prop_link["<div title="Prop: Link
Consumers: 7
Used in: /home/ctp/Github/shuk-sham/components/Hero.tsx, /home/ctp/Github/shuk-sham/components/ProductBreadcrumb.tsx, /home/ctp/Github/shuk-sham/components/ShoppingCart.tsx, /home/ctp/Github/shuk-sham/components/actions/Menu.tsx, /home/ctp/Github/shuk-sham/components/checkout/Checkout.tsx, /home/ctp/Github/shuk-sham/components/shopping-cart/CartCheck.tsx, /home/ctp/Github/shuk-sham/app/[locale]/order-confirmation/page.tsx"><b>Prop:</b> Link
(Used 7×)
(Hero, ProductBreadcrumb, ShoppingCart, ...)</div>"]:::multiConsumer
  prop_saleribbon["<div title="Prop: SaleRibbon
Consumers: 2
Used in: /home/ctp/Github/shuk-sham/components/ProductCard.tsx, /home/ctp/Github/shuk-sham/components/SingleProductView.tsx"><b>Prop:</b> SaleRibbon
(Used 2×)
(ProductCard, SingleProductView)</div>"]:::multiConsumer
  prop_productpagecontent["<div title="Prop: ProductPageContent
Consumers: 2
Used in: /home/ctp/Github/shuk-sham/components/ProductPageContent.tsx, /home/ctp/Github/shuk-sham/app/[locale]/product/[id]/page.tsx"><b>Prop:</b> ProductPageContent
(Used 2×)
(ProductPageContent, page)</div>"]:::multiConsumer
  prop_productquickview["<div title="Prop: ProductQuickView
Consumers: 3
Used in: /home/ctp/Github/shuk-sham/components/ProductQuickView.tsx, /home/ctp/Github/shuk-sham/components/ProductsListMain.tsx, /home/ctp/Github/shuk-sham/components/browse/BrowseViewMain.tsx"><b>Prop:</b> ProductQuickView
(Used 3×)
(ProductQuickView, ProductsListMain, BrowseViewMain)</div>"]:::multiConsumer
  prop_productbadges["<div title="Prop: ProductBadges
Consumers: 2
Used in: /home/ctp/Github/shuk-sham/components/ProductQuickView.tsx, /home/ctp/Github/shuk-sham/components/SingleProductView.tsx"><b>Prop:</b> ProductBadges
(Used 2×)
(ProductQuickView, SingleProductView)</div>"]:::multiConsumer
  prop_productlist["<div title="Prop: ProductList
Consumers: 3
Used in: /home/ctp/Github/shuk-sham/components/ProductsListMain.tsx, /home/ctp/Github/shuk-sham/app/[locale]/page.tsx, /home/ctp/Github/shuk-sham/app/[locale]/cart-check/page.tsx"><b>Prop:</b> ProductList
(Used 3×)
(ProductsListMain, page, page)</div>"]:::multiConsumer
  prop_productcard["<div title="Prop: ProductCard
Consumers: 2
Used in: /home/ctp/Github/shuk-sham/components/ProductsListMain.tsx, /home/ctp/Github/shuk-sham/components/browse/ProductCardWrapper.tsx"><b>Prop:</b> ProductCard
(Used 2×)
(ProductsListMain, ProductCardWrapper)</div>"]:::multiConsumer
  prop_swipetoaction["<div title="Prop: SwipeToAction
Consumers: 4
Used in: /home/ctp/Github/shuk-sham/components/ShoppingCart.tsx, /home/ctp/Github/shuk-sham/components/actions/ConfirmationModal.tsx, /home/ctp/Github/shuk-sham/components/shopping-cart/CartButton.tsx, /home/ctp/Github/shuk-sham/components/shopping-cart/CartCheck.tsx"><b>Prop:</b> SwipeToAction
(Used 4×)
(ShoppingCart, ConfirmationModal, CartButton, ...)</div>"]:::multiConsumer
  prop_sharemodal["<div title="Prop: ShareModal
Consumers: 3
Used in: /home/ctp/Github/shuk-sham/components/SingleProductView.tsx, /home/ctp/Github/shuk-sham/components/actions/Menu.tsx, /home/ctp/Github/shuk-sham/components/actions/ShareModal.tsx"><b>Prop:</b> ShareModal
(Used 3×)
(SingleProductView, Menu, ShareModal)</div>"]:::multiConsumer
  prop_generatemetadata["<div title="Prop: generateMetadata
Consumers: 4
Used in: /home/ctp/Github/shuk-sham/app/[locale]/layout.tsx, /home/ctp/Github/shuk-sham/app/[locale]/page.tsx, /home/ctp/Github/shuk-sham/app/[locale]/browse/page.tsx, /home/ctp/Github/shuk-sham/app/[locale]/product/[id]/page.tsx"><b>Prop:</b> generateMetadata
(Used 4×)
(layout, page, page, ...)</div>"]:::multiConsumer
  prop_helpmodal["<div title="Prop: HelpModal
Consumers: 2
Used in: /home/ctp/Github/shuk-sham/components/actions/HelpModal.tsx, /home/ctp/Github/shuk-sham/components/actions/Menu.tsx"><b>Prop:</b> HelpModal
(Used 2×)
(HelpModal, Menu)</div>"]:::multiConsumer
  prop_addressmodal["<div title="Prop: AddressModal
Consumers: 3
Used in: /home/ctp/Github/shuk-sham/components/actions/Menu.tsx, /home/ctp/Github/shuk-sham/components/shopping-cart/AddressModal.tsx, /home/ctp/Github/shuk-sham/components/shopping-cart/CartCheck.tsx"><b>Prop:</b> AddressModal
(Used 3×)
(Menu, AddressModal, CartCheck)</div>"]:::multiConsumer
  prop_userauthmodal["<div title="Prop: UserAuthModal
Consumers: 4
Used in: /home/ctp/Github/shuk-sham/components/actions/Menu.tsx, /home/ctp/Github/shuk-sham/components/auth/AuthButton.tsx, /home/ctp/Github/shuk-sham/components/shopping-cart/CartButton.tsx, /home/ctp/Github/shuk-sham/components/shopping-cart/CartCheck.tsx"><b>Prop:</b> UserAuthModal
(Used 4×)
(Menu, AuthButton, CartButton, ...)</div>"]:::multiConsumer
  prop_shineeffect["<div title="Prop: ShineEffect
Consumers: 1
Used in: /home/ctp/Github/shuk-sham/components/actions/SwipeToAction.tsx"><b>Prop:</b> ShineEffect
(Used 1×)
(SwipeToAction)</div>"]:::multiConsumer
  prop_notemodal["<div title="Prop: NoteModal
Consumers: 2
Used in: /home/ctp/Github/shuk-sham/components/actions/noteModal.tsx, /home/ctp/Github/shuk-sham/components/shopping-cart/CartCheck.tsx"><b>Prop:</b> NoteModal
(Used 2×)
(noteModal, CartCheck)</div>"]:::multiConsumer
  prop_ricloseline["<div title="Prop: RiCloseLine
Consumers: 1
Used in: /home/ctp/Github/shuk-sham/components/auth/UserAuthModal.tsx"><b>Prop:</b> RiCloseLine
(Used 1×)
(UserAuthModal)</div>"]:::multiConsumer
  prop_checkout["<div title="Prop: Checkout
Consumers: 2
Used in: /home/ctp/Github/shuk-sham/components/checkout/Checkout.tsx, /home/ctp/Github/shuk-sham/components/checkout/CheckoutModal.tsx"><b>Prop:</b> Checkout
(Used 2×)
(Checkout, CheckoutModal)</div>"]:::multiConsumer
  prop_checkoutmodal["<div title="Prop: CheckoutModal
Consumers: 2
Used in: /home/ctp/Github/shuk-sham/components/checkout/CheckoutModal.tsx, /home/ctp/Github/shuk-sham/components/shopping-cart/CartButton.tsx"><b>Prop:</b> CheckoutModal
(Used 2×)
(CheckoutModal, CartButton)</div>"]:::multiConsumer
  prop_categorynavigation["<div title="Prop: CategoryNavigation
Consumers: 2
Used in: /home/ctp/Github/shuk-sham/components/browse/BrowseViewMain.tsx, /home/ctp/Github/shuk-sham/components/browse/CategoryNavigationBar.tsx"><b>Prop:</b> CategoryNavigation
(Used 2×)
(BrowseViewMain, CategoryNavigationBar)</div>"]:::multiConsumer
  prop_productsection["<div title="Prop: ProductSection
Consumers: 2
Used in: /home/ctp/Github/shuk-sham/components/browse/BrowseViewMain.tsx, /home/ctp/Github/shuk-sham/components/browse/ProductSection.tsx"><b>Prop:</b> ProductSection
(Used 2×)
(BrowseViewMain, ProductSection)</div>"]:::multiConsumer
  prop_productcardwrapper["<div title="Prop: ProductCardWrapper
Consumers: 2
Used in: /home/ctp/Github/shuk-sham/components/browse/ProductCardWrapper.tsx, /home/ctp/Github/shuk-sham/components/browse/ProductSection.tsx"><b>Prop:</b> ProductCardWrapper
(Used 2×)
(ProductCardWrapper, ProductSection)</div>"]:::multiConsumer
  prop_formatcacheage["<div title="Prop: formatCacheAge
Consumers: 3
Used in: /home/ctp/Github/shuk-sham/lib/utils/formatting.ts, /home/ctp/Github/shuk-sham/lib/utils/api/index.ts, /home/ctp/Github/shuk-sham/lib/utils/cache/index.ts"><b>Prop:</b> formatCacheAge
(Used 3×)
(formatting, index, index)</div>"]:::multiConsumer
  prop_formatcachetime["<div title="Prop: formatCacheTime
Consumers: 2
Used in: /home/ctp/Github/shuk-sham/lib/utils/formatting.ts, /home/ctp/Github/shuk-sham/lib/utils/cache/index.ts"><b>Prop:</b> formatCacheTime
(Used 2×)
(formatting, index)</div>"]:::multiConsumer
  prop_formathumantime["<div title="Prop: formatHumanTime
Consumers: 2
Used in: /home/ctp/Github/shuk-sham/lib/utils/formatting.ts, /home/ctp/Github/shuk-sham/lib/utils/cache/index.ts"><b>Prop:</b> formatHumanTime
(Used 2×)
(formatting, index)</div>"]:::multiConsumer
  prop_get["<div title="Prop: GET
Consumers: 9
Used in: /home/ctp/Github/shuk-sham/app/api/order/route.ts, /home/ctp/Github/shuk-sham/app/api/[locale]/products/route.ts, /home/ctp/Github/shuk-sham/app/api/order/[id]/route.ts, /home/ctp/Github/shuk-sham/app/api/order/customer/route.ts, /home/ctp/Github/shuk-sham/app/api/[locale]/category/route.ts, /home/ctp/Github/shuk-sham/app/api/[locale]/products/[id]/route.ts, /home/ctp/Github/shuk-sham/app/api/users/[id]/route.ts, /home/ctp/Github/shuk-sham/app/api/users/me/route.ts, /home/ctp/Github/shuk-sham/app/api/order/customer/[id]/route.ts"><b>Prop:</b> GET
(Used 9×)
(route, route, route, ...)</div>"]:::multiConsumer
  prop_post["<div title="Prop: POST
Consumers: 6
Used in: /home/ctp/Github/shuk-sham/app/api/order/route.ts, /home/ctp/Github/shuk-sham/app/api/monitoring/metrics/route.ts, /home/ctp/Github/shuk-sham/app/api/users/route.ts, /home/ctp/Github/shuk-sham/app/api/users/logout/route.ts, /home/ctp/Github/shuk-sham/app/api/users/send-otp/route.ts, /home/ctp/Github/shuk-sham/app/api/users/verify-otp/route.ts"><b>Prop:</b> POST
(Used 6×)
(route, route, route, ...)</div>"]:::multiConsumer
  prop_put["<div title="Prop: PUT
Consumers: 3
Used in: /home/ctp/Github/shuk-sham/app/api/order/[id]/route.ts, /home/ctp/Github/shuk-sham/app/api/users/route.ts, /home/ctp/Github/shuk-sham/app/api/users/[id]/route.ts"><b>Prop:</b> PUT
(Used 3×)
(route, route, route)</div>"]:::multiConsumer
  end

  subgraph ComponentProps["Component Props"]
    subgraph parsecacheheaders_props["parseCacheHeaders Props"]
  parsecacheheaders_prop_headers["<div title="Prop: headers in parseCacheHeaders
Type: undefined
File: /home/ctp/Github/shuk-sham/test-cache.js"><b>headers</b>
Type: undefined</div>"]:::prop
    end
    subgraph formattime_props["formatTime Props"]
  formattime_prop_ms["<div title="Prop: ms in formatTime
Type: undefined
File: /home/ctp/Github/shuk-sham/test-cache.js"><b>ms</b>
Type: undefined</div>"]:::prop
    end
    subgraph fetchendpoint_props["fetchEndpoint Props"]
  fetchendpoint_prop_url["<div title="Prop: url in fetchEndpoint
Type: undefined
File: /home/ctp/Github/shuk-sham/test-cache.js"><b>url</b>
Type: undefined</div>"]:::prop
    end
    subgraph dataprovider_props["DataProvider Props"]
  dataprovider_prop_destructured["<div title="Prop: destructured in DataProvider
Type: undefined
File: /home/ctp/Github/shuk-sham/contexts/DataContext.tsx"><b>destructured</b>
Type: undefined</div>"]:::prop
    end
    subgraph conditionalhero_props["ConditionalHero Props"]
  conditionalhero_prop_destructured["<div title="Prop: destructured in ConditionalHero
Type: undefined
File: /home/ctp/Github/shuk-sham/components/ConditionalHero.tsx"><b>destructured</b>
Type: undefined</div>"]:::prop
    end
    more_components["...and 70 more components"]
  end

  %% Import relationships
  middleware --> middleware
  routing --> middleware
  routing --> layout
  routing --> page
  routing --> request
  routing --> routing
  next --> next_config
  next --> layout
  next --> page
  plugin --> next_config
  tailwindcss --> tailwind_config
  useuser --> authcontext
  useuser --> menu
  useuser --> checkout
  useuser --> cartbutton
  useuser --> cartcheck
  logger --> authcontext
  logger --> datacontext
  logger --> backgroundfetcher
  logger --> userdashboard
  logger --> layout
  logger --> providers
  logger --> createentityhook
  logger --> useproduct
  logger --> useuser
  logger --> cache_diagnostic
  logger --> route
  logger --> fetchers
  logger --> user_api
  logger --> wp_api
  logger --> redis
  logger --> wp_cache
  logger --> cache_metrics
  global --> cartcontext
  global --> datacontext
  global --> backgroundfetcher
  global --> conditionalhero
  global --> headersearch
  global --> hero
  global --> productbadges
  global --> productcard
  global --> productquickview
  global --> productslistmain
  global --> saleribbon
  global --> singleproductview
  global --> siteconfig
  global --> confirmationmodal
  global --> emptycartnotification
  global --> productsearchmanager
  global --> searchresults
  global --> shineeffect
  global --> swipetoaction
  global --> notemodal
  global --> userauthmodal
  global --> browseviewmain
  global --> categorynavigationbar
  global --> productcardwrapper
  global --> productsection
  global --> createentityhook
  global --> usecategories
  global --> useorders
  global --> useproduct
  global --> useproducts
  global --> useuser
  global --> cartitem
  global --> auth
  global --> ui
  global --> fetchers
  global --> index
  global --> user_api
  global --> wp_api
  global --> wp_cache
  global --> page
  global --> route
  hooks --> cartcontext
  hooks --> datacontext
  hooks --> browseviewmain
  confirmationmodal --> cartcontext
  emptycartnotification --> cartcontext
  navigation --> cartcontext
  navigation --> datacontext
  navigation --> backgroundfetcher
  navigation --> categoryselectionmain
  navigation --> conditionalhero
  navigation --> header
  navigation --> headersearch
  navigation --> hero
  navigation --> productbadges
  navigation --> productbreadcrumb
  navigation --> productcard
  navigation --> productquickview
  navigation --> productslistmain
  navigation --> saleribbon
  navigation --> shoppingcart
  navigation --> singleproductview
  navigation --> userdashboard
  navigation --> layout
  navigation --> not_found
  navigation --> orderhistory
  navigation --> personalinfo
  navigation --> confirmationmodal
  navigation --> menu
  navigation --> productsearchmanager
  navigation --> swipetoaction
  navigation --> userauthmodal
  navigation --> checkout
  navigation --> checkoutmodal
  navigation --> browseviewmain
  navigation --> categorynavigationbar
  navigation --> cartbutton
  navigation --> cartcheck
  navigation --> cartstatepersistencehandler
  navigation --> emptycartnotification
  navigation --> page
  navigation --> routing
  dealscontext --> cartcontext
  dealscontext --> providers
  dealscontext --> dealsdebugpanel
  dealscontext --> usedealsdebug
  deal --> cartcontext
  deal --> dealscontext
  deal --> dealsdebugpanel
  deal --> usecartdiscounts
  deal --> cartitem
  deal --> index
  loading --> datacontext
  loading --> singleproductview
  loading --> page
  error --> datacontext
  swr --> backgroundfetcher
  swr --> providers
  swr --> swr
  swr --> createentityhook
  swr --> useorders
  swr --> useproduct
  swr --> useuser
  swr --> swr_config
  fetchers --> backgroundfetcher
  fetchers --> createentityhook
  fetchers --> usecategories
  fetchers --> useorders
  fetchers --> useproduct
  fetchers --> useproducts
  fetchers --> useuser
  providers --> backgroundfetcher
  providers --> browseviewwrapper
  providers --> layout
  constants --> backgroundfetcher
  constants --> providers
  constants --> createentityhook
  constants --> useorders
  constants --> useproduct
  constants --> useuser
  constants --> index
  constants --> swr_config
  constants --> wp_cache
  constants --> route
  browseviewmain --> browseviewwrapper
  image --> categoryselectionmain
  image --> headersearch
  image --> hero
  image --> productbadges
  image --> productcard
  image --> productquickview
  image --> shoppingcart
  image --> singleproductview
  image --> menu
  image --> productsearchmanager
  image --> searchresults
  image --> checkout
  image --> cartcheck
  datacontext --> categoryselectionmain
  datacontext --> productslistmain
  datacontext --> layout
  datacontext --> productsearchmanager
  datacontext --> devtools
  hero --> conditionalhero
  lucide_react --> header
  lucide_react --> productslistmain
  lucide_react --> menu
  menu --> header
  productsearchmanager --> header
  next_intl --> headersearch
  next_intl --> singleproductview
  next_intl --> userdashboard
  next_intl --> layout
  next_intl --> page
  next_intl --> orderhistory
  next_intl --> personalinfo
  next_intl --> emptycartnotification
  index --> headersearch
  index --> productquickview
  index --> productslistmain
  index --> singleproductview
  index --> searchresults
  index --> productcardwrapper
  index --> route
  index --> wp_cache
  link --> hero
  link --> productbreadcrumb
  link --> shoppingcart
  link --> menu
  link --> checkout
  link --> cartcheck
  link --> page
  cartcontext --> productcard
  cartcontext --> productquickview
  cartcontext --> shoppingcart
  cartcontext --> singleproductview
  cartcontext --> layout
  cartcontext --> orderhistory
  cartcontext --> searchresults
  cartcontext --> checkout
  cartcontext --> dealsdebugpanel
  cartcontext --> cartbutton
  cartcontext --> cartcheck
  cartcontext --> cartstatepersistencehandler
  saleribbon --> productcard
  saleribbon --> singleproductview
  he --> productcard
  he --> swipetoaction
  he --> cartbutton
  ar --> productcard
  ar --> swipetoaction
  ar --> cartbutton
  singleproductview --> productpagecontent
  productbadges --> productquickview
  productbadges --> singleproductview
  productcard --> productslistmain
  productcard --> productcardwrapper
  productquickview --> productslistmain
  productquickview --> browseviewmain
  usedragscroll --> productslistmain
  authcontext --> productslistmain
  authcontext --> userdashboard
  authcontext --> layout
  authcontext --> authbutton
  useorders --> productslistmain
  useorders --> orderhistory
  swipetoaction --> shoppingcart
  swipetoaction --> confirmationmodal
  swipetoaction --> cartbutton
  swipetoaction --> cartcheck
  sharemodal --> singleproductview
  sharemodal --> menu
  useproduct --> singleproductview
  productbreadcrumb --> singleproductview
  userprofile --> userdashboard
  server --> layout
  server --> page
  server --> route
  server --> auth
  server --> index
  server --> request
  globals --> layout
  cartbutton --> layout
  heromessages --> layout
  cartstatepersistencehandler --> layout
  script --> layout
  siteconfig --> layout
  siteconfig --> page
  header --> layout
  conditionalhero --> layout
  devtools --> layout
  dealsdebugpanel --> layout
  categoryselectionmain --> page
  productslistmain --> page
  backgroundfetcher --> page
  checkout --> orderhistory
  checkout --> checkout
  checkout --> checkoutmodal
  user --> personalinfo
  user --> addressmodal
  addressmodal --> menu
  addressmodal --> cartcheck
  helpmodal --> menu
  userauthmodal --> menu
  userauthmodal --> authbutton
  userauthmodal --> cartbutton
  userauthmodal --> cartcheck
  useflasheffect --> menu
  useflasheffect --> searchresults
  searchresults --> productsearchmanager
  shineeffect --> swipetoaction
  ri --> authbutton
  ri --> userauthmodal
  checkout --> checkoutmodal
  categorynavigationbar --> browseviewmain
  productsection --> browseviewmain
  productcardwrapper --> productsection
  react_intersection_observer --> productsection
  checkoutmodal --> cartbutton
  user_api --> cartbutton
  notemodal --> cartcheck
  cache --> swr
  cache --> index
  cache --> redis
  cartitem --> usecartdiscounts
  createentityhook --> usecategories
  createentityhook --> useproducts
  cache_metrics --> cache_diagnostic
  cache_metrics --> route
  product --> index
  browseviewwrapper --> page
  orderconfirmation --> page
  userdashboard --> page
  redis --> route
  redis --> wp_cache
  os --> route
  wp_auth --> route
  wp_auth --> wp_api
  cartcheck --> page
  buffer --> wp_auth
  ioredis --> redis
  memory_cache --> redis
  cache_diagnostic --> redis
  cache_diagnostic --> route
  wp_api --> wp_cache
  route --> wp_cache
  perf_hooks --> cache_metrics
  productpagecontent --> page
  wp_cache --> page
  wp_cache --> route
  messages --> orderconfirmation
  deals --> route
  auth --> route
  cache_keys --> route
  uuid --> route
  %% Context relationships
  authcontext -->|creates| unnamedcontext
  cartcontext -->|creates| unnamedcontext
  datacontext -->|creates| unnamedcontext
  dealscontext -->|creates| unnamedcontext
  %% Props relationships
  parsecacheheaders -->|has props| parsecacheheaders_props
  formattime -->|has props| formattime_props
  fetchendpoint -->|has props| fetchendpoint_props
  confirmationmodal -->|has props| confirmationmodal_props
  emptycartnotification -->|has props| emptycartnotification_props
  dataprovider -->|has props| dataprovider_props
  error -->|has props| error_props
  image -->|has props| image_props
  conditionalhero -->|has props| conditionalhero_props
  hero -->|has props| hero_props
  chevronleft -->|has props| chevronleft_props
  productsearchmanager -->|has props| productsearchmanager_props
  menu -->|has props| menu_props
  link -->|has props| link_props
  getmessages -->|has props| getmessages_props
  saleribbon -->|has props| saleribbon_props
  productpagecontent -->|has props| productpagecontent_props
  singleproductview -->|has props| singleproductview_props
  productquickview -->|has props| productquickview_props
  productbadges -->|has props| productbadges_props
  productlist -->|has props| productlist_props
  getrandomproducts -->|has props| getrandomproducts_props
  productcard -->|has props| productcard_props
  chevronright -->|has props| chevronright_props
  swipetoaction -->|has props| swipetoaction_props
  productbreadcrumb -->|has props| productbreadcrumb_props
  sharemodal -->|has props| sharemodal_props
  personalinfo -->|has props| personalinfo_props
  orderhistory -->|has props| orderhistory_props
  generatemetadata -->|has props| generatemetadata_props
  localelayout -->|has props| localelayout_props
  script -->|has props| script_props
  nextintlclientprovider -->|has props| nextintlclientprovider_props
  swrprovider -->|has props| swrprovider_props
  swrconfig -->|has props| swrconfig_props
  providers -->|has props| providers_props
  helpmodal -->|has props| helpmodal_props
  addressmodal -->|has props| addressmodal_props
  userauthmodal -->|has props| userauthmodal_props
  searchresults -->|has props| searchresults_props
  shineeffect -->|has props| shineeffect_props
  notemodal -->|has props| notemodal_props
  riuserline -->|has props| riuserline_props
  ricloseline -->|has props| ricloseline_props
  riuser3line -->|has props| riuser3line_props
  riarrowleftsline -->|has props| riarrowleftsline_props
  rilogoutboxrline -->|has props| rilogoutboxrline_props
  checkout -->|has props| checkout_props
  checkoutmodal -->|has props| checkoutmodal_props
  categorynavigation -->|has props| categorynavigation_props
  productsection -->|has props| productsection_props
  productcardwrapper -->|has props| productcardwrapper_props
  createentityhook -->|has props| createentityhook_props
  usedragscroll -->|has props| usedragscroll_props
  useflasheffect -->|has props| useflasheffect_props
  useproduct -->|has props| useproduct_props
  logcache -->|has props| logcache_props
  getlayersymbol -->|has props| getlayersymbol_props
  getactiontext -->|has props| getactiontext_props
  formatcacheage -->|has props| formatcacheage_props
  formatcachetime -->|has props| formatcachetime_props
  formathumantime -->|has props| formathumantime_props
  formatprice -->|has props| formatprice_props
  suspense -->|has props| suspense_props
  get -->|has props| get_props
  post -->|has props| post_props
  apifetcher -->|has props| apifetcher_props
  userfetcher -->|has props| userfetcher_props
  productsfetcher -->|has props| productsfetcher_props
  productfetcher -->|has props| productfetcher_props
  categoriesfetcher -->|has props| categoriesfetcher_props
  ordersfetcher -->|has props| ordersfetcher_props
  iscachevalid -->|has props| iscachevalid_props
  fetchcurrentuser -->|has props| fetchcurrentuser_props
  wpapifetch -->|has props| wpapifetch_props
  isauthenticated -->|has props| isauthenticated_props
  setauthheaders -->|has props| setauthheaders_props
  clearauthcookies -->|has props| clearauthcookies_props
  safecacheage -->|has props| safecacheage_props
  calculatecachepercent -->|has props| calculatecachepercent_props
  getcachediagnostics -->|has props| getcachediagnostics_props
  addcacheheaders -->|has props| addcacheheaders_props
  adddevelopmentcacheheaders -->|has props| adddevelopmentcacheheaders_props
  getfromcache -->|has props| getfromcache_props
  setincache -->|has props| setincache_props
  deletefromcache -->|has props| deletefromcache_props
  getcategorycachekey -->|has props| getcategorycachekey_props
  getproductcachekey -->|has props| getproductcachekey_props
  getusercachekey -->|has props| getusercachekey_props
  transformcategories -->|has props| transformcategories_props
  getcategories -->|has props| getcategories_props
  getproducts -->|has props| getproducts_props
  paginateproducts -->|has props| paginateproducts_props
  pretransformproducts -->|has props| pretransformproducts_props
  setmetricsenabled -->|has props| setmetricsenabled_props
  trackcacheoperation -->|has props| trackcacheoperation_props
  maptoobject -->|has props| maptoobject_props
  withcachemetrics -->|has props| withcachemetrics_props
  page -->|has props| page_props
  put -->|has props| put_props
  delete -->|has props| delete_props
  prop_error -.->|used by| datacontext
  prop_error -.->|used by| error
  prop_image -.->|used by| categoryselectionmain
  prop_image -.->|used by| headersearch
  prop_image -.->|used by| hero
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
  prop_sharemodal -.->|used by| singleproductview
  prop_sharemodal -.->|used by| menu
  prop_sharemodal -.->|used by| sharemodal
  prop_generatemetadata -.->|used by| layout
  prop_generatemetadata -.->|used by| page
  prop_generatemetadata -.->|used by| page
  prop_helpmodal -.->|used by| helpmodal
  prop_helpmodal -.->|used by| menu
  prop_addressmodal -.->|used by| menu
  prop_addressmodal -.->|used by| addressmodal
  prop_addressmodal -.->|used by| cartcheck
  prop_userauthmodal -.->|used by| menu
  prop_userauthmodal -.->|used by| authbutton
  prop_userauthmodal -.->|used by| cartbutton
  prop_shineeffect -.->|used by| swipetoaction
  prop_notemodal -.->|used by| notemodal
  prop_notemodal -.->|used by| cartcheck
  prop_ricloseline -.->|used by| userauthmodal
  prop_checkout -.->|used by| checkout
  prop_checkout -.->|used by| checkoutmodal
  prop_checkoutmodal -.->|used by| checkoutmodal
  prop_checkoutmodal -.->|used by| cartbutton
  prop_categorynavigation -.->|used by| browseviewmain
  prop_categorynavigation -.->|used by| categorynavigationbar
  prop_productsection -.->|used by| browseviewmain
  prop_productsection -.->|used by| productsection
  prop_productcardwrapper -.->|used by| productcardwrapper
  prop_productcardwrapper -.->|used by| productsection
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
  cartitems -->|mapped in| checkout
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
- **/home/ctp/Github/shuk-sham/app/api/users/route.ts** → `next/server`
- **/home/ctp/Github/shuk-sham/app/api/users/route.ts** → `@/lib/utils/auth/wp-auth`
- **/home/ctp/Github/shuk-sham/app/api/order/customer/route.ts** → `next/server`
- **/home/ctp/Github/shuk-sham/app/api/order/customer/route.ts** → `@/lib/utils/auth/wp-auth`
- **/home/ctp/Github/shuk-sham/app/api/order/customer/route.ts** → `@/lib/utils/auth/index`
- **/home/ctp/Github/shuk-sham/app/api/[locale]/category/route.ts** → `next/server`
- **/home/ctp/Github/shuk-sham/app/api/[locale]/category/route.ts** → `@/lib/types/global`
- **/home/ctp/Github/shuk-sham/app/api/[locale]/category/route.ts** → `@/lib/utils/cache/wp-cache`
- **/home/ctp/Github/shuk-sham/app/api/[locale]/category/route.ts** → `@/lib/utils/cache/index`
- **/home/ctp/Github/shuk-sham/app/api/[locale]/category/route.ts** → `@/lib/constants`
- **/home/ctp/Github/shuk-sham/app/api/[locale]/products/[id]/route.ts** → `next/server`
- **/home/ctp/Github/shuk-sham/app/api/[locale]/products/[id]/route.ts** → `@/lib/types/global`
- **/home/ctp/Github/shuk-sham/app/api/[locale]/products/[id]/route.ts** → `@/lib/utils/cache/wp-cache`
- **/home/ctp/Github/shuk-sham/app/api/[locale]/products/[id]/route.ts** → `@/lib/utils/cache/index`
- **/home/ctp/Github/shuk-sham/app/api/[locale]/products/[id]/route.ts** → `@/lib/constants`
- **/home/ctp/Github/shuk-sham/app/api/[locale]/products/[id]/route.ts** → `@/lib/types/deals`
- **/home/ctp/Github/shuk-sham/app/api/monitoring/metrics/reset/route.ts** → `next/server`
- **/home/ctp/Github/shuk-sham/app/api/monitoring/metrics/reset/route.ts** → `@/lib/utils/monitoring/cache-metrics`
- **/home/ctp/Github/shuk-sham/app/api/monitoring/metrics/reset/route.ts** → `@/lib/utils/logger`
- **/home/ctp/Github/shuk-sham/app/api/users/[id]/route.ts** → `next/server`
- **/home/ctp/Github/shuk-sham/app/api/users/[id]/route.ts** → `@/lib/utils/auth/wp-auth`
- **/home/ctp/Github/shuk-sham/app/api/users/me/route.ts** → `next/server`
- **/home/ctp/Github/shuk-sham/app/api/users/me/route.ts** → `@/lib/utils/auth/wp-auth`
- **/home/ctp/Github/shuk-sham/app/api/users/me/route.ts** → `@/lib/utils/auth/auth`
- **/home/ctp/Github/shuk-sham/app/api/users/me/route.ts** → `@/lib/constants`
- **/home/ctp/Github/shuk-sham/app/api/users/me/route.ts** → `@/lib/utils/cache/redis`
- **/home/ctp/Github/shuk-sham/app/api/users/me/route.ts** → `@/lib/utils/logger`
- **/home/ctp/Github/shuk-sham/app/api/users/me/route.ts** → `@/lib/utils/cache-keys`
- **/home/ctp/Github/shuk-sham/app/api/users/me/route.ts** → `@/lib/utils/cache-diagnostic`
- **/home/ctp/Github/shuk-sham/app/api/users/me/route.ts** → `uuid`
- **/home/ctp/Github/shuk-sham/app/api/users/logout/route.ts** → `next/server`
- **/home/ctp/Github/shuk-sham/app/api/users/logout/route.ts** → `@/lib/utils/auth/auth`
- **/home/ctp/Github/shuk-sham/app/api/users/send-otp/route.ts** → `next/server`
- **/home/ctp/Github/shuk-sham/app/api/users/send-otp/route.ts** → `@/lib/utils/auth/wp-auth`
- **/home/ctp/Github/shuk-sham/app/api/users/verify-otp/route.ts** → `next/server`
- **/home/ctp/Github/shuk-sham/app/api/users/verify-otp/route.ts** → `@/lib/utils/auth/wp-auth`
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
- **/home/ctp/Github/shuk-sham/app/[locale]/order-confirmation/page.tsx** → `react`
- **/home/ctp/Github/shuk-sham/app/[locale]/order-confirmation/page.tsx** → `next/navigation`
- **/home/ctp/Github/shuk-sham/app/[locale]/order-confirmation/page.tsx** → `next/link`
- **/home/ctp/Github/shuk-sham/app/[locale]/order-confirmation/page.tsx** → `@/messages/orderConfirmation`
- **/home/ctp/Github/shuk-sham/app/[locale]/user-dashboard/page.tsx** → `react`
- **/home/ctp/Github/shuk-sham/app/[locale]/user-dashboard/page.tsx** → `next/navigation`
- **/home/ctp/Github/shuk-sham/app/[locale]/user-dashboard/page.tsx** → `@/components/UserDashboard`
- **/home/ctp/Github/shuk-sham/app/[locale]/user-dashboard/page.tsx** → `next-intl`
- **/home/ctp/Github/shuk-sham/app/[locale]/cart-check/page.tsx** → `react`
- **/home/ctp/Github/shuk-sham/app/[locale]/cart-check/page.tsx** → `@/components/shopping-cart/CartCheck`
- **/home/ctp/Github/shuk-sham/app/[locale]/cart-check/page.tsx** → `@/components/ProductsListMain`
- **/home/ctp/Github/shuk-sham/app/[locale]/cart-check/page.tsx** → `next-intl`
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
- **/home/ctp/Github/shuk-sham/components/auth/AuthButton.tsx** → `react`
- **/home/ctp/Github/shuk-sham/components/auth/AuthButton.tsx** → `react-icons/ri`
- **/home/ctp/Github/shuk-sham/components/auth/AuthButton.tsx** → `./UserAuthModal`
- **/home/ctp/Github/shuk-sham/components/auth/AuthButton.tsx** → `@/contexts/AuthContext`
- **/home/ctp/Github/shuk-sham/components/auth/UserAuthModal.tsx** → `react`
- **/home/ctp/Github/shuk-sham/components/auth/UserAuthModal.tsx** → `react-icons/ri`
- **/home/ctp/Github/shuk-sham/components/auth/UserAuthModal.tsx** → `next/navigation`
- **/home/ctp/Github/shuk-sham/components/auth/UserAuthModal.tsx** → `@/lib/types/global`
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
- **/home/ctp/Github/shuk-sham/components/dev/DevTools.tsx** → `react`
- **/home/ctp/Github/shuk-sham/components/dev/DevTools.tsx** → `@/contexts/DataContext`
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
- **/home/ctp/Github/shuk-sham/messages/orderConfirmation.ts** → `@/lib/types/messages`
- **/home/ctp/Github/shuk-sham/i18n/request.ts** → `next-intl/server`
- **/home/ctp/Github/shuk-sham/i18n/request.ts** → `./routing`
- **/home/ctp/Github/shuk-sham/i18n/routing.ts** → `next-intl/routing`
- **/home/ctp/Github/shuk-sham/i18n/routing.ts** → `next-intl/navigation`

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
- **HelpModal** receives props from:
  - /home/ctp/Github/shuk-sham/components/actions/HelpModal.tsx ([object Object])
  - /home/ctp/Github/shuk-sham/components/actions/Menu.tsx (isOpen, onClose, locale)
- **AddressModal** receives props from:
  - /home/ctp/Github/shuk-sham/components/actions/Menu.tsx (isOpen, onClose, onSave, initialData, locale)
  - /home/ctp/Github/shuk-sham/components/shopping-cart/AddressModal.tsx ([object Object])
  - /home/ctp/Github/shuk-sham/components/shopping-cart/CartCheck.tsx (isOpen, onClose, onSave, initialData, locale)
- **UserAuthModal** receives props from:
  - /home/ctp/Github/shuk-sham/components/actions/Menu.tsx (isOpen, onClose, userData)
  - /home/ctp/Github/shuk-sham/components/auth/AuthButton.tsx (isOpen, onClose, userData)
  - /home/ctp/Github/shuk-sham/components/shopping-cart/CartButton.tsx (isOpen, onClose, userData)
  - /home/ctp/Github/shuk-sham/components/shopping-cart/CartCheck.tsx (onClose, isOpen)
- **SearchResults** receives props from:
  - /home/ctp/Github/shuk-sham/components/actions/ProductSearchManager.tsx (results, isVisible, searchQuery, onClose, onProductSelect, locale)
- **ShineEffect** receives props from:
  - /home/ctp/Github/shuk-sham/components/actions/SwipeToAction.tsx (isActive, direction, alwaysShow, beamCount, beamWidth, containerClassName)
  - /home/ctp/Github/shuk-sham/components/actions/SwipeToAction.tsx (isActive, direction, alwaysShow, beamCount, beamWidth, containerClassName)
- **NoteModal** receives props from:
  - /home/ctp/Github/shuk-sham/components/actions/noteModal.tsx ([object Object])
  - /home/ctp/Github/shuk-sham/components/shopping-cart/CartCheck.tsx (isOpen, onClose, onSave, initialValue, locale, isReplaceModal)
  - /home/ctp/Github/shuk-sham/components/shopping-cart/CartCheck.tsx (isOpen, onClose, onSave, onRemove, initialValue, locale, isReplaceModal)
- **RiUserLine** receives props from:
  - /home/ctp/Github/shuk-sham/components/auth/AuthButton.tsx (size)
- **RiCloseLine** receives props from:
  - /home/ctp/Github/shuk-sham/components/auth/UserAuthModal.tsx (size)
  - /home/ctp/Github/shuk-sham/components/auth/UserAuthModal.tsx (size)
- **RiUser3Line** receives props from:
  - /home/ctp/Github/shuk-sham/components/auth/UserAuthModal.tsx (size, className)
- **RiArrowLeftSLine** receives props from:
  - /home/ctp/Github/shuk-sham/components/auth/UserAuthModal.tsx (size, className)
- **RiLogoutBoxRLine** receives props from:
  - /home/ctp/Github/shuk-sham/components/auth/UserAuthModal.tsx (size, className)
- **Checkout** receives props from:
  - /home/ctp/Github/shuk-sham/components/checkout/Checkout.tsx ([object Object])
  - /home/ctp/Github/shuk-sham/components/checkout/CheckoutModal.tsx (isModal, onModalClose, onOrderSuccess)
- **CheckoutModal** receives props from:
  - /home/ctp/Github/shuk-sham/components/checkout/CheckoutModal.tsx ([object Object])
  - /home/ctp/Github/shuk-sham/components/shopping-cart/CartButton.tsx (isOpen, onClose)
- **CategoryNavigation** receives props from:
  - /home/ctp/Github/shuk-sham/components/browse/BrowseViewMain.tsx (categories, selectedCategory, selectedSubCategory, activeCategoryName, onCategorySelect, onSubCategorySelect)
  - /home/ctp/Github/shuk-sham/components/browse/CategoryNavigationBar.tsx ([object Object])
- **ProductSection** receives props from:
  - /home/ctp/Github/shuk-sham/components/browse/BrowseViewMain.tsx (key, categoryId, categoryName, products, onProductClick, setRef)
  - /home/ctp/Github/shuk-sham/components/browse/ProductSection.tsx ([object Object])
- **ProductCardWrapper** receives props from:
  - /home/ctp/Github/shuk-sham/components/browse/ProductCardWrapper.tsx ([object Object])
  - /home/ctp/Github/shuk-sham/components/browse/ProductSection.tsx (key, product, onProductClick)
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
  - /home/ctp/Github/shuk-sham/app/api/[locale]/products/route.ts ([object Object])
  - /home/ctp/Github/shuk-sham/app/api/order/[id]/route.ts ([object Object])
  - /home/ctp/Github/shuk-sham/app/api/order/customer/route.ts ([object Object])
  - /home/ctp/Github/shuk-sham/app/api/[locale]/category/route.ts ([object Object])
  - /home/ctp/Github/shuk-sham/app/api/[locale]/products/[id]/route.ts ([object Object])
  - /home/ctp/Github/shuk-sham/app/api/users/[id]/route.ts ([object Object])
  - /home/ctp/Github/shuk-sham/app/api/users/me/route.ts ([object Object])
  - /home/ctp/Github/shuk-sham/app/api/order/customer/[id]/route.ts ([object Object])
- **POST** receives props from:
  - /home/ctp/Github/shuk-sham/app/api/order/route.ts ([object Object])
  - /home/ctp/Github/shuk-sham/app/api/monitoring/metrics/route.ts ([object Object])
  - /home/ctp/Github/shuk-sham/app/api/users/route.ts ([object Object])
  - /home/ctp/Github/shuk-sham/app/api/users/logout/route.ts ([object Object])
  - /home/ctp/Github/shuk-sham/app/api/users/send-otp/route.ts ([object Object])
  - /home/ctp/Github/shuk-sham/app/api/users/verify-otp/route.ts ([object Object])
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
- **PUT** receives props from:
  - /home/ctp/Github/shuk-sham/app/api/order/[id]/route.ts ([object Object])
  - /home/ctp/Github/shuk-sham/app/api/users/route.ts ([object Object])
  - /home/ctp/Github/shuk-sham/app/api/users/[id]/route.ts ([object Object])
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
- **/home/ctp/Github/shuk-sham/components/auth/AuthButton.tsx** passes props to:
  - RiUserLine (size)
  - UserAuthModal (isOpen, onClose, userData)
- **/home/ctp/Github/shuk-sham/components/auth/UserAuthModal.tsx** passes props to:
  - RiCloseLine (size)
  - RiUser3Line (size, className)
  - RiArrowLeftSLine (size, className)
  - RiLogoutBoxRLine (size, className)
  - RiCloseLine (size)
- **/home/ctp/Github/shuk-sham/components/checkout/Checkout.tsx** passes props to:
  - Checkout ([object Object])
  - Link (href, className)
  - Image (src, alt, width, height, className)
  - Image (src, alt, width, height, className)
- **/home/ctp/Github/shuk-sham/components/checkout/CheckoutModal.tsx** passes props to:
  - CheckoutModal ([object Object])
  - Checkout (isModal, onModalClose, onOrderSuccess)
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
- **/home/ctp/Github/shuk-sham/app/[locale]/order-confirmation/page.tsx** passes props to:
  - Link (href, className)
  - Link (href, className)
- **/home/ctp/Github/shuk-sham/app/api/order/route.ts** passes props to:
  - GET ([object Object])
  - POST ([object Object])
- **/home/ctp/Github/shuk-sham/app/[locale]/cart-check/page.tsx** passes props to:
  - ProductList (title, filterType)
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
- **/home/ctp/Github/shuk-sham/app/api/[locale]/products/route.ts** passes props to:
  - GET ([object Object])
- **/home/ctp/Github/shuk-sham/app/api/monitoring/metrics/route.ts** passes props to:
  - POST ([object Object])
- **/home/ctp/Github/shuk-sham/app/api/order/[id]/route.ts** passes props to:
  - GET ([object Object])
  - PUT ([object Object])
  - DELETE ([object Object])
- **/home/ctp/Github/shuk-sham/app/api/users/route.ts** passes props to:
  - POST ([object Object])
  - PUT ([object Object])
- **/home/ctp/Github/shuk-sham/app/api/order/customer/route.ts** passes props to:
  - GET ([object Object])
- **/home/ctp/Github/shuk-sham/app/api/[locale]/category/route.ts** passes props to:
  - GET ([object Object])
- **/home/ctp/Github/shuk-sham/app/api/[locale]/products/[id]/route.ts** passes props to:
  - GET ([object Object])
- **/home/ctp/Github/shuk-sham/app/api/users/[id]/route.ts** passes props to:
  - GET ([object Object])
  - PUT ([object Object])
- **/home/ctp/Github/shuk-sham/app/api/users/me/route.ts** passes props to:
  - GET ([object Object])
- **/home/ctp/Github/shuk-sham/app/api/users/logout/route.ts** passes props to:
  - POST ([object Object])
- **/home/ctp/Github/shuk-sham/app/api/users/send-otp/route.ts** passes props to:
  - POST ([object Object])
- **/home/ctp/Github/shuk-sham/app/api/users/verify-otp/route.ts** passes props to:
  - POST ([object Object])
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
- **HelpModal** is consumed in 2 files:
  - /home/ctp/Github/shuk-sham/components/actions/HelpModal.tsx
  - /home/ctp/Github/shuk-sham/components/actions/Menu.tsx
- **AddressModal** is consumed in 3 files:
  - /home/ctp/Github/shuk-sham/components/actions/Menu.tsx
  - /home/ctp/Github/shuk-sham/components/shopping-cart/AddressModal.tsx
  - /home/ctp/Github/shuk-sham/components/shopping-cart/CartCheck.tsx
- **UserAuthModal** is consumed in 4 files:
  - /home/ctp/Github/shuk-sham/components/actions/Menu.tsx
  - /home/ctp/Github/shuk-sham/components/auth/AuthButton.tsx
  - /home/ctp/Github/shuk-sham/components/shopping-cart/CartButton.tsx
  - /home/ctp/Github/shuk-sham/components/shopping-cart/CartCheck.tsx
- **ShineEffect** is consumed in 1 files:
  - /home/ctp/Github/shuk-sham/components/actions/SwipeToAction.tsx
- **NoteModal** is consumed in 2 files:
  - /home/ctp/Github/shuk-sham/components/actions/noteModal.tsx
  - /home/ctp/Github/shuk-sham/components/shopping-cart/CartCheck.tsx
- **RiCloseLine** is consumed in 1 files:
  - /home/ctp/Github/shuk-sham/components/auth/UserAuthModal.tsx
- **Checkout** is consumed in 2 files:
  - /home/ctp/Github/shuk-sham/components/checkout/Checkout.tsx
  - /home/ctp/Github/shuk-sham/components/checkout/CheckoutModal.tsx
- **CheckoutModal** is consumed in 2 files:
  - /home/ctp/Github/shuk-sham/components/checkout/CheckoutModal.tsx
  - /home/ctp/Github/shuk-sham/components/shopping-cart/CartButton.tsx
- **CategoryNavigation** is consumed in 2 files:
  - /home/ctp/Github/shuk-sham/components/browse/BrowseViewMain.tsx
  - /home/ctp/Github/shuk-sham/components/browse/CategoryNavigationBar.tsx
- **ProductSection** is consumed in 2 files:
  - /home/ctp/Github/shuk-sham/components/browse/BrowseViewMain.tsx
  - /home/ctp/Github/shuk-sham/components/browse/ProductSection.tsx
- **ProductCardWrapper** is consumed in 2 files:
  - /home/ctp/Github/shuk-sham/components/browse/ProductCardWrapper.tsx
  - /home/ctp/Github/shuk-sham/components/browse/ProductSection.tsx
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
  - /home/ctp/Github/shuk-sham/app/api/[locale]/products/route.ts
  - /home/ctp/Github/shuk-sham/app/api/order/[id]/route.ts
  - /home/ctp/Github/shuk-sham/app/api/order/customer/route.ts
  - /home/ctp/Github/shuk-sham/app/api/[locale]/category/route.ts
  - /home/ctp/Github/shuk-sham/app/api/[locale]/products/[id]/route.ts
  - /home/ctp/Github/shuk-sham/app/api/users/[id]/route.ts
  - /home/ctp/Github/shuk-sham/app/api/users/me/route.ts
  - /home/ctp/Github/shuk-sham/app/api/order/customer/[id]/route.ts
- **POST** is consumed in 6 files:
  - /home/ctp/Github/shuk-sham/app/api/order/route.ts
  - /home/ctp/Github/shuk-sham/app/api/monitoring/metrics/route.ts
  - /home/ctp/Github/shuk-sham/app/api/users/route.ts
  - /home/ctp/Github/shuk-sham/app/api/users/logout/route.ts
  - /home/ctp/Github/shuk-sham/app/api/users/send-otp/route.ts
  - /home/ctp/Github/shuk-sham/app/api/users/verify-otp/route.ts
- **PUT** is consumed in 3 files:
  - /home/ctp/Github/shuk-sham/app/api/order/[id]/route.ts
  - /home/ctp/Github/shuk-sham/app/api/users/route.ts
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
  - /home/ctp/Github/shuk-sham/components/checkout/Checkout.tsx
  - /home/ctp/Github/shuk-sham/components/debug/DealsDebugPanel.tsx
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

