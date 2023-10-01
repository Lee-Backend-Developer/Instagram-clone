/**
 * Type alias for the different stages of the photo-modal.
 */
export type PhotoModalStage = 'create-post' | 'edit-post-adjustments' | 'edit-post-form' | 'sharing-post' | 'post-shared' | 'post-failed'

/**
 * Type alias for the different tabs of the photo-modal.
 */
export type PhotoModalTab = 'adjustments-tab' | 'filters-tab'

/**
 * Type alias for an image in the photo-modal.
 */
export type PhotoModalImage = string | null

/**
 * Type alias representing a reference to an HTML input element.
 */
export type HTMLInputElementRef = InstanceType<typeof HTMLInputElement>

/**
 * Type alias representing the available tab options for the navigation bar.
 */
export type NavBarTabs = 'profile-posts' | 'profile-tagged' | 'profile-saved' | 'profile-peed'
/**
 * Type alias representing the available modal options for the application.
 */
export type ModalName = 'profile-modal' | 'photo-modal' | 'comment-modal' | 'other-modal'


/**
 * Interface for  an image filter applied to an image.
 */
export interface PhotoModalImageFilter {
    filterName: string // Filter name
    filterClass: string // CSS class for applying the filter
    displayName: string // Filter value
}

/**
 * Interface for  the adjustments for an image.
 */
export interface PhotoModalAdjustment {
    brightness: {
        label: string // Label for brightness adjustment
        level: number | string // Level of brightness adjustment
    }
    contrast: {
        label: string // Label for contrast adjustment
        level: number | string // Level of contrast adjustment
    }
    saturation: {
        label: string // Label for saturation adjustment
        level: number | string // Level of saturation adjustment
    }
}

/**
 * Interface for the form data for an image.
 */
export interface PhotoModalImageForm {
    caption: string // Caption for the image
    location: string // Location of the image
}
