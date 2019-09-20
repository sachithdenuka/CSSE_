import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'quick_order',
    loadChildren: () => import('./quick-order/quick-order').then(m => m.ListPageModule)
  },
  { path: 'stocks', loadChildren: './stocks/stocks.module#StocksPageModule' },
  { path: 'order_status', loadChildren: './order-status/order-status.module#OrderStatusPageModule' },
  { path: 'purchase_history', loadChildren: './purchase-history/purchase-history.module#PurchaseHistoryPageModule' },
  { path: 'stocks-content', loadChildren: './stocks/stocks-content/stocks-content.module#StocksContentPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
