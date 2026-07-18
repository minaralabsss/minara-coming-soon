/**
 * Email subscription response type
 */
export interface EmailSubscriptionResponse {
  success: boolean;
  message: string;
  email?: string;
}

/**
 * API error response type
 */
export interface ApiErrorResponse {
  success: false;
  message: string;
  error?: string;
}

/**
 * Combined response type for email subscription
 */
export type SubscriptionResponse =
  | EmailSubscriptionResponse
  | ApiErrorResponse;

/**
 * Component props types
 */
export interface BaseComponentProps {
  className?: string;
}

export interface EmailFormProps extends BaseComponentProps {
  onSuccess?: () => void;
  onError?: (error: string) => void;
}
