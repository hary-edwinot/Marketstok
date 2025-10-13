
// Auth Paths
export const homePath = "/";
export const loginPath = "/login";
export const registerPath = "/register";

// Feature Paths
export const dashboardPath = "/dashboard";
export const productsPath = "/products";
export const ordersPath = "/orders";
export const customersPath = "/customers";
export const settingsPath = "/settings";
export const reportsPath = "/reports";
export const analyticsPath = "/analytics";
export const supportPath = "/support";
export const profilePath = "/profile";
export const notificationsPath = "/notifications";
export const billingPath = "/billing";
export const integrationsPath = "/integrations";
export const logoutPath = "/logout";

// Nested Paths
export const productDetailsPath = (productId) => `/products/${productId}`;
export const orderDetailsPath = (orderId) => `/orders/${orderId}`;
export const customerDetailsPath = (customerId) => `/customers/${customerId}`;
export const settingsGeneralPath = "/settings/general";
export const settingsSecurityPath = "/settings/security";
export const settingsNotificationsPath = "/settings/notifications";
export const reportsSalesPath = "/reports/sales";
export const reportsCustomersPath = "/reports/customers";
export const reportsInventoryPath = "/reports/inventory";